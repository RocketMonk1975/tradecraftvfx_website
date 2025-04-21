# Script to download images from URLs and save them to the temp-heroes directory
$imageUrls = @(
    # Creed 3
    @{url = "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"; dest = "creed3-hero.jpg"},
    @{url = "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/CREED-III-MGM-16-H-2023.jpg"; dest = "creed3-gallery1.jpg"},
    @{url = "https://s.yimg.com/ny/api/res/1.2/MdxvQllk9AZwE_EhJnNLUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-05/6a7976f0-e939-11ed-b7ff-edfd5dbcd3b2"; dest = "creed3-gallery2.jpg"},
    @{url = "https://sportshub.cbsistatic.com/i/2023/01/27/01e4a0a0-fed1-4e77-882d-cc1f9289eb97/creed-iii-poster.jpg"; dest = "creed3-gallery3.jpg"},
    
    # The Continental
    @{url = "https://www.slashfilm.com/img/gallery/the-continentals-showrunner-explains-how-the-john-wick-prequel-expands-the-franchises-lore/l-intro-1694725385.jpg"; dest = "continental-hero.jpg"},
    @{url = "https://www.slashfilm.com/img/gallery/the-continental-review-this-john-wick-prequel-series-pulls-off-some-killer-action-scenes/l-intro-1694800260.jpg"; dest = "continental-gallery1.jpg"},
    @{url = "https://d.newsweek.com/en/full/2261094/continental-mel-gibson-cormac.jpg"; dest = "continental-gallery2.jpg"},
    @{url = "https://www.denofgeek.com/wp-content/uploads/2023/09/the-continental-from-the-world-of-john-wick.jpg"; dest = "continental-gallery3.jpg"},
    
    # The Residence
    @{url = "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQd_dtciC6Ivs0S82d2OMV3MNF5KgqTJGZ_YJOWM7CTh4Kwv4z0Rh5wEF0hy5L-1HYIAZCdMqOk5oiyMCYtvj1FvtdSGRmZv68-yafQYCQiCHBXGb1_JKgNmVQ7HyFG3tlKt6-GvnrQ.jpg"; dest = "residence-hero.jpg"},
    @{url = "https://www.whats-on-netflix.com/wp-content/uploads/2023/04/the-residence-netflix-series-shonda-rhimes-1200x675.jpg"; dest = "residence-gallery1.jpg"},
    @{url = "https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/03/the-residence-release-date.jpg"; dest = "residence-gallery2.jpg"},
    @{url = "https://cosmicbook.news/wp-content/uploads/2023/03/the-residence-netflix-cast.jpg"; dest = "residence-gallery3.jpg"},
    
    # Elevation
    @{url = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/elevation-movie.jpg"; dest = "elevation-hero.jpg"},
    @{url = "https://c.pxhere.com/photos/83/ce/aerial_view_architecture_buildings_city_cityscape_downtown_skyscrapers_urban-1593311.jpg"; dest = "elevation-gallery1.jpg"},
    @{url = "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Anthony-Mackie-attends-the-Worlds-End-premiere-GETTY-H-2023.jpg"; dest = "elevation-gallery2.jpg"},
    @{url = "https://www.cnet.com/a/img/resize/fdfe05be6b5b59f3a4839f83d8ecc3ec0e19584f/hub/2023/02/19/93784612-8d3e-446b-8051-14ce4666c00b/anthony-mackie-as-sam-wilson-in-falc-2.jpg?auto=webp&fit=crop&height=675&width=1200"; dest = "elevation-gallery3.jpg"},
    
    # Digital Frontier
    @{url = "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2021/06/Microsoft-Teams-hybrid-meetings-scaled.jpg"; dest = "digital-frontier-hero.jpg"},
    @{url = "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/03/M365-Copilot-Word.png"; dest = "digital-frontier-gallery1.jpg"},
    @{url = "https://news.microsoft.com/wp-content/uploads/prod/sites/604/2022/04/Microsoft-Advertising-960x640.jpg"; dest = "digital-frontier-gallery2.jpg"},
    @{url = "https://blogs.microsoft.com/wp-content/uploads/prod/2023/08/960x0-56.png"; dest = "digital-frontier-gallery3.jpg"},
    
    # Wings and a Prayer
    @{url = "https://m.media-amazon.com/images/M/MV5BYmFhNDBkOTgtMWQ4NC00MWZhLWEwMjAtNGZiZWYzYzgxNWRjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"; dest = "wings-hero.jpg"},
    @{url = "https://www.historynet.com/wp-content/uploads/2022/07/AVH-MA22_COVER_STORY_P51_04_GettyImages_142193100.jpg"; dest = "wings-gallery1.jpg"},
    @{url = "https://www.historynet.com/wp-content/uploads/2022/07/AVH-MA22_COVER_STORY_P51_06_USAF.jpg"; dest = "wings-gallery2.jpg"},
    @{url = "https://www.historynet.com/wp-content/uploads/2022/07/AVH-MA22_COVER_STORY_P51_01_GettyImages_152177698.jpg"; dest = "wings-gallery3.jpg"},
    
    # The Originals
    @{url = "https://flxt.tmsimg.com/assets/p9848807_b_h9_ap.jpg"; dest = "originals-hero.jpg"},
    @{url = "https://flxt.tmsimg.com/assets/p10303090_i_h9_ad.jpg"; dest = "originals-gallery1.jpg"},
    @{url = "https://www.tvinsider.com/wp-content/uploads/2018/04/originals-s5-1014x570.jpg"; dest = "originals-gallery2.jpg"},
    @{url = "https://vignette.wikia.nocookie.net/vampirediaries/images/c/c1/The_Originals_S2_New_Poster.png"; dest = "originals-gallery3.jpg"},
    
    # Picard
    @{url = "https://www.cnet.com/a/img/resize/91a158012edc5eff67dffbab10c47f7e49465c4d/hub/2020/01/22/fcbed3fd-957c-4d0c-9c28-c84de0238fa0/star-trek-picard-2020-002.jpg?auto=webp&width=1200"; dest = "picard-hero.jpg"},
    @{url = "https://www.slashfilm.com/img/gallery/star-trek-picard-season-3-review-the-next-generation-crew-reunites-for-a-classy-nostalgia-trip/l-intro-1676559563.jpg"; dest = "picard-gallery1.jpg"},
    @{url = "https://www.tvinsider.com/wp-content/uploads/2023/02/star-trek-picard-season-3-titan-space-1014x570.jpg"; dest = "picard-gallery2.jpg"},
    @{url = "https://treknews.net/wp-content/uploads/2019/12/picard-vineyard-france-1280x720.jpg"; dest = "picard-gallery3.jpg"},
    
    # Pandora
    @{url = "https://tv-fanatic-res.cloudinary.com/iu/s--6PuWdJx6--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1563826636/pandora-episode-2-season-1.jpg"; dest = "pandora-hero.jpg"},
    @{url = "https://assets-prd.ignimgs.com/2022/07/20/pandora-blogroll-1563309656404-1658330370022.jpg"; dest = "pandora-gallery1.jpg"},
    @{url = "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/5/9/5/1261595_pandora_733169.jpg"; dest = "pandora-gallery2.jpg"},
    @{url = "https://www.hypable.com/wp-content/uploads/2019/08/pandora-1x04.jpg"; dest = "pandora-gallery3.jpg"},
    
    # I.S.S.
    @{url = "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1178057581_522419_t4ytgk.jpg"; dest = "iss-hero.jpg"},
    @{url = "https://m.media-amazon.com/images/M/MV5BYTQwOTY0MjAtZjViYS00NjMzLWE4NWItN2ZhOWQ1OGZkOWZhXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"; dest = "iss-gallery1.jpg"},
    @{url = "https://movies.universalpictures.com/media/06-iss-dm-mobile-banner-1080x745-pl-f01-022123-63f667b225908-1.jpg"; dest = "iss-gallery2.jpg"},
    @{url = "https://medias.spotern.com/spots/w640/376/376430-1602582709.jpg"; dest = "iss-gallery3.jpg"},
    
    # Unfrosted
    @{url = "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQcH9vgIY0987R0-KdsqnXiPoXWkWk-fQDpp8B-LxQVQZUQqM70dXVeJPYfXiWp7gP8Tis39KfKTbHTRzTgCE09SkzkrSIMrQvA97R8zEPu0wUqTqbJThzk56AHvk1Q1wVa0j7n5o6LJ8ZQFsIgJ9D19b.jpg"; dest = "unfrosted-hero.jpg"},
    @{url = "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQe--e0Dj8-RMUf22kVD0mIw6XLc8agQzZ5GYJcMwVYpCld6mmJMZWCN6W-UDWMEm_A8XZu5V2hxEVW4ujcKnpKZUjQ9iCVaMD2NnZ9TkgxYXP2mG0Tf5BUEe9DkCxOuLGmNUoT18.jpg"; dest = "unfrosted-gallery1.jpg"},
    @{url = "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVS4MiPKimvkuA0HKHvuUUtJ8G0d1w4JgUQYtPOYm3-5uYrjwmpZxPTz8WwPDGE-t8kgmFvFOqSF_C0tK7ehuEHOcGgxtqJ7X70.jpg"; dest = "unfrosted-gallery2.jpg"},
    @{url = "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1204176_v9_ba.jpg"; dest = "unfrosted-gallery3.jpg"},
    
    # Hidden Figures
    @{url = "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg"; dest = "hidden-figures-hero.jpg"},
    @{url = "https://s.yimg.com/ny/api/res/1.2/kHcnXroOIrQrGR2UVJxjwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ng--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/2f36a60a35212d2db3e517bf64798838"; dest = "hidden-figures-gallery1.jpg"},
    @{url = "https://www.nasa.gov/wp-content/uploads/2013/04/16681236531_5d3a0d3d10_o.jpg"; dest = "hidden-figures-gallery2.jpg"},
    @{url = "https://www.nps.gov/common/uploads/grid_builder/stma/crop16_9/D5CA22DB-1DD8-B71B-0BB5399E6A8026E1.jpg?width=640&quality=90&mode=crop"; dest = "hidden-figures-gallery3.jpg"}
)

# Create the destination directory if it doesn't exist
$destDir = "public\images\projects\temp-heroes"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Download each image
foreach ($img in $imageUrls) {
    $destPath = Join-Path $destDir $img.dest
    Write-Host "Downloading $($img.url) to $destPath"
    try {
        # Add TLS 1.2 support for HTTPS
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12
        
        # Create web client with a user agent to avoid being blocked
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        $webClient.DownloadFile($img.url, $destPath)
        Write-Host "Successfully downloaded $($img.dest)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($img.url): $_" -ForegroundColor Red
        
        # Create a placeholder image instead
        $placeholderHtml = @"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #1a1a1a;
            color: white;
            font-family: Arial, sans-serif;
        }
        .placeholder {
            text-align: center;
            padding: 20px;
            border: 2px solid #333;
            background-color: #222;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <h2>TradeCraft VFX</h2>
        <p>Image Placeholder: $($img.dest)</p>
    </div>
</body>
</html>
"@
        $placeholderHtml | Out-File -FilePath $destPath -Encoding utf8
        Write-Host "Created placeholder for $($img.dest)" -ForegroundColor Yellow
    }
}

Write-Host "Download process completed. Check $destDir for the images." -ForegroundColor Cyan
