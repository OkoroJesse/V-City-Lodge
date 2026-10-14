import os
from PIL import Image, ImageFilter, ImageEnhance

NEW_BATCH = {
    "terrace-lounge-patio.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791964604808_4793c106.jpg",
    "games-lounge-foosball.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791964604807_2a9cf3c8.jpg",
    "suite-presidential-foosball.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791964604822_17d1d315.jpg",
    "delicacy-suya-rice-platter.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791964604878_f236b17a.jpg",
    "delicacy-grilled-fish-potatoes.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791964604875_11f71bcc.jpg",
}

TARGET_DIR = r"c:\Users\jesse\Documents\v-city-lounge\public\images\hotel"
UPSCALE_FACTOR = 2.5

def upscale_image(input_path, output_path):
    print(f"Upscaling: {input_path} -> {output_path}")
    im = Image.open(input_path)
    orig_w, orig_h = im.size
    
    target_w = int(orig_w * UPSCALE_FACTOR)
    target_h = int(orig_h * UPSCALE_FACTOR)
    
    upscaled = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
    if upscaled.mode != "RGB":
        upscaled = upscaled.convert("RGB")
        
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.6, percent=125, threshold=3))
    enhancer = ImageEnhance.Contrast(sharpened)
    enhanced = enhancer.enhance(1.04)
    sharp_enhancer = ImageEnhance.Sharpness(enhanced)
    final_img = sharp_enhancer.enhance(1.08)
    
    final_img.save(output_path, "JPEG", quality=95, subsampling=0, progressive=True)
    print(f"  [DONE] {orig_w}x{orig_h} -> {target_w}x{target_h}")

def main():
    os.makedirs(TARGET_DIR, exist_ok=True)
    for filename, src in NEW_BATCH.items():
        out_path = os.path.join(TARGET_DIR, filename)
        upscale_image(src, out_path)
    print("New batch of 5 images upscaled to 2560px successfully!")

if __name__ == "__main__":
    main()
