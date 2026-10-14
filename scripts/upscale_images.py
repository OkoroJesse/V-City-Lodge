import os
from PIL import Image, ImageFilter, ImageEnhance

# Source mapping for all images:
NEW_ASSETS = {
    "pool-outdoor.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791758700138_9d94e25f.jpg",
    "games-lounge-1.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791758700107_a025c32f.jpg",
    "games-lounge-tv.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791758700145_063b8e1f.jpg",
    "fitness-center-1.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791758700207_c620993e.jpg",
    "fitness-center-treadmills.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791758700250_ac283a68.jpg",
}

TARGET_DIR = r"c:\Users\jesse\Documents\v-city-lounge\public\images\hotel"
UPSCALE_FACTOR = 2.5  # 1024 -> ~2560px for ultra-high-definition / Retina displays

def upscale_and_enhance(input_path, output_path, is_png=False):
    print(f"Upscaling: {input_path} -> {output_path}")
    im = Image.open(input_path)
    orig_w, orig_h = im.size
    
    target_w = int(orig_w * UPSCALE_FACTOR)
    target_h = int(orig_h * UPSCALE_FACTOR)
    
    # 1. High-fidelity Lanczos Resampling
    upscaled = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    if not is_png and upscaled.mode == "RGB":
        # 2. Refined Unsharp Mask for micro-texture restoration
        sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.6, percent=125, threshold=3))
        
        # 3. Fine-tuned contrast & color clarity
        enhancer = ImageEnhance.Contrast(sharpened)
        enhanced = enhancer.enhance(1.04)
        
        sharp_enhancer = ImageEnhance.Sharpness(enhanced)
        final_img = sharp_enhancer.enhance(1.08)
        
        final_img.save(output_path, "JPEG", quality=95, subsampling=0, progressive=True)
    elif is_png:
        # PNG (Logo) upscale with Lanczos
        upscaled.save(output_path, "PNG", optimize=True)
    else:
        upscaled.save(output_path, "JPEG", quality=95, subsampling=0)
        
    print(f"  [DONE] Transformed from {orig_w}x{orig_h} to {target_w}x{target_h}")

def main():
    os.makedirs(TARGET_DIR, exist_ok=True)
    
    # 1. Process new amenity assets
    for name, path in NEW_ASSETS.items():
        out_p = os.path.join(TARGET_DIR, name)
        upscale_and_enhance(path, out_p, is_png=False)
        
    # 2. Upscale existing images in TARGET_DIR
    existing_files = [
        "exterior-facade.jpg",
        "logo-gold.png",
        "room-deluxe-balcony.jpg",
        "room-royal-diamond.jpg",
        "room-superior-king.jpg",
        "room-business-executive.jpg",
        "room-executive-suite.jpg",
        "room-presidential-suite.jpg",
    ]
    
    # Backup source for existing
    original_sources = {
        "exterior-facade.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791755544481_e8cf737f.jpg",
        "logo-gold.png": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791755512626_35273e56.png",
        "room-deluxe-balcony.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791755577753_7461b9c4.jpg",
        "room-executive-suite.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791755577740_abbbc051.jpg",
        "room-presidential-suite.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791755577772_fa276dfd.jpg",
        "room-superior-king.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791757722350_9edfa5c8.jpg",
        "room-business-executive.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791757804003_b30ca6d6.jpg",
        "room-royal-diamond.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791757804021_8ecc4ec1.jpg",
    }
    
    for filename, src_path in original_sources.items():
        out_p = os.path.join(TARGET_DIR, filename)
        is_png = filename.endswith(".png")
        upscale_and_enhance(src_path, out_p, is_png=is_png)

if __name__ == "__main__":
    main()
