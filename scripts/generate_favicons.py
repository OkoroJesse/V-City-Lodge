import os
from PIL import Image, ImageFilter

def generate():
    src_path = "public/images/hotel/logo-gold.png"
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Source logo not found at {src_path}")

    src = Image.open(src_path).convert("RGBA")
    
    # Emblem is centered around (1266, 1200) with width ~1837 and height ~1840
    # Let's crop a 2048 x 2048 region centered at (1266, 1200) to keep crisp margins
    crop_size = 2048
    cx, cy = 1266, 1200
    left = cx - crop_size // 2
    top = cy - crop_size // 2
    right = left + crop_size
    bottom = top + crop_size
    
    # Ensure within bounds
    left = max(0, left)
    top = max(0, top)
    right = min(src.width, right)
    bottom = min(src.height, bottom)
    
    cropped = src.crop((left, top, right, bottom))
    
    # 512x512 high-res icon
    icon_512 = cropped.resize((512, 512), Image.Resampling.LANCZOS)
    
    # 180x180 Apple touch icon
    apple_180 = cropped.resize((180, 180), Image.Resampling.LANCZOS)
    
    # Target directories
    os.makedirs("app", exist_ok=True)
    os.makedirs("public", exist_ok=True)
    
    # Save PNG icons
    icon_512.save("app/icon.png", format="PNG", optimize=True)
    icon_512.save("public/icon.png", format="PNG", optimize=True)
    print("Saved app/icon.png and public/icon.png (512x512)")
    
    apple_180.save("app/apple-icon.png", format="PNG", optimize=True)
    apple_180.save("public/apple-icon.png", format="PNG", optimize=True)
    print("Saved app/apple-icon.png and public/apple-icon.png (180x180)")
    
    # Multi-resolution ICO (16, 32, 48)
    sizes = [(16, 16), (32, 32), (48, 48)]
    # Sharpen small sizes slightly for optimal tab clarity
    ico_images = []
    for s in sizes:
        img_s = cropped.resize(s, Image.Resampling.LANCZOS)
        # Apply a very gentle unsharp mask for 16 and 32 to enhance gold lines
        if s[0] <= 32:
            img_s = img_s.filter(ImageFilter.UnsharpMask(radius=1.0, percent=120, threshold=3))
        ico_images.append(img_s)
        
    # Save favicon.ico
    ico_images[0].save(
        "app/favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=ico_images[1:]
    )
    ico_images[0].save(
        "public/favicon.ico",
        format="ICO",
        sizes=sizes,
        append_images=ico_images[1:]
    )
    print("Saved app/favicon.ico and public/favicon.ico with sizes (16x16, 32x32, 48x48)")

if __name__ == "__main__":
    generate()
