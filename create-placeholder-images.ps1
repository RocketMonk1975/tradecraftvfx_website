# Script to create placeholder images for the TradeCraft VFX website

# List of placeholders to create
$placeholders = @(
    # Hero images (1920x1080)
    "creed3-hero.jpg", 
    "continental-hero.jpg",
    "residence-hero.jpg",
    "elevation-hero.jpg",
    "digital-frontier-hero.jpg",
    "wings-hero.jpg",
    "originals-hero.jpg",
    "picard-hero.jpg",
    "pandora-hero.jpg", 
    "iss-hero.jpg",
    "unfrosted-hero.jpg",
    "hidden-figures-hero.jpg",
    
    # Gallery images (800x600)
    "creed3-gallery1.jpg", "creed3-gallery2.jpg", "creed3-gallery3.jpg",
    "continental-gallery1.jpg", "continental-gallery2.jpg", "continental-gallery3.jpg",
    "residence-gallery1.jpg", "residence-gallery2.jpg", "residence-gallery3.jpg",
    "elevation-gallery1.jpg", "elevation-gallery2.jpg", "elevation-gallery3.jpg",
    "digital-frontier-gallery1.jpg", "digital-frontier-gallery2.jpg", "digital-frontier-gallery3.jpg",
    "wings-gallery1.jpg", "wings-gallery2.jpg", "wings-gallery3.jpg",
    "originals-gallery1.jpg", "originals-gallery2.jpg", "originals-gallery3.jpg",
    "picard-gallery1.jpg", "picard-gallery2.jpg", "picard-gallery3.jpg",
    "pandora-gallery1.jpg", "pandora-gallery2.jpg", "pandora-gallery3.jpg",
    "iss-gallery1.jpg", "iss-gallery2.jpg", "iss-gallery3.jpg",
    "unfrosted-gallery1.jpg", "unfrosted-gallery2.jpg", "unfrosted-gallery3.jpg",
    "hidden-figures-gallery1.jpg", "hidden-figures-gallery2.jpg", "hidden-figures-gallery3.jpg"
)

# Function to create placeholder image
function Create-PlaceholderImage {
    param (
        [string]$filename,
        [int]$width,
        [int]$height,
        [string]$text,
        [string]$backgroundColor = "#2a2a2a",
        [string]$textColor = "#ffffff"
    )
    
    $destPath = Join-Path "public\images\projects\temp-heroes" $filename
    
    # Create placeholder using a web service (placeholder.com)
    $placeholderUrl = "https://via.placeholder.com/$($width)x$($height)/$($backgroundColor.TrimStart('#'))/$($textColor.TrimStart('#'))?text=$([System.Web.HttpUtility]::UrlEncode($text))"
    
    try {
        # Add TLS 1.2 support for HTTPS
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12
        
        # Create web client
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        $webClient.DownloadFile($placeholderUrl, $destPath)
        Write-Host "Created placeholder image: $destPath" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to create placeholder image $filename : $_" -ForegroundColor Red
    }
}

# Add necessary .NET assembly for URL encoding
Add-Type -AssemblyName System.Web

# Create destination directory if not exists
$destDir = "public\images\projects\temp-heroes"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Process each placeholder
foreach ($placeholder in $placeholders) {
    # Determine image dimensions and text based on filename
    if ($placeholder -like "*hero*") {
        $width = 1920
        $height = 1080
        $text = $placeholder.Replace(".jpg", "") + " - TradeCraft VFX"
    }
    else {
        $width = 800
        $height = 600
        $text = $placeholder.Replace(".jpg", "") + " - TradeCraft VFX"
    }
    
    # Skip if a valid image already exists (larger than 10KB)
    $existingFile = Join-Path $destDir $placeholder
    if (Test-Path $existingFile) {
        $fileSize = (Get-Item $existingFile).Length
        if ($fileSize -gt 10KB) {
            Write-Host "Skipping $placeholder - already exists with size $fileSize bytes" -ForegroundColor Cyan
            continue
        }
        else {
            Write-Host "Replacing small placeholder $placeholder ($fileSize bytes)" -ForegroundColor Yellow
        }
    }
    
    # Create placeholder image
    Create-PlaceholderImage -filename $placeholder -width $width -height $height -text $text
}

Write-Host "Placeholder image creation completed." -ForegroundColor Cyan
