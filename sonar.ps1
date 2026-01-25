[Console]::InputEncoding  = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

#Remove
Set-Location -Path $PSScriptRoot

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ([string]::IsNullOrWhiteSpace($branch) -or $branch -eq 'HEAD') {
    throw "Cannot determine current branch (detached HEAD?)."
}

Write-Host "Sonar branch: $branch"

$token = $env:SONAR_TOKEN
if ($null -eq $token) { $token = "" }
$token = $token.Trim()

if ([string]::IsNullOrWhiteSpace($token)) {
    if ([Console]::IsInputRedirected) {
        throw "SONAR_TOKEN is not set, and input is not interactive. Set SONAR_TOKEN in User env var or in the IDE Run Configuration environment variables."
    }

    Write-Host "SONAR_TOKEN is not set. Please paste token and press Enter:"
    $token = (Read-Host).Trim()

    if ([string]::IsNullOrWhiteSpace($token)) {
        throw "SONAR_TOKEN is not set"
    }

    [Environment]::SetEnvironmentVariable("SONAR_TOKEN", $token, [EnvironmentVariableTarget]::User)
    $env:SONAR_TOKEN = $token
}

$env:SONAR_SCANNER_OPTS = '-Djavax.net.ssl.trustStoreType=Windows-ROOT'

$argsList = @(
    "--define", "sonar.projectKey=adeliergiyev_qa-qc-process",
    "--define", "sonar.organization=alexandrdeliergiyevqa",
    "--define", "sonar.host.url=https://sonarcloud.io",
    "--define", "sonar.login=$token",
    "--define", "sonar.branch.name=$branch"
)

npx sonar-scanner @argsList

if ($LASTEXITCODE -ne 0) {
    Write-Error "SonarScanner failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
