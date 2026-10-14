import os
from PIL import Image, ImageFilter, ImageEnhance

DELICACIES_ASSETS = {
    "delicacy-bar-lounge.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791957925600_c6accd6a.jpg",
    "delicacy-jollof-peppersoup.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791957925567_d060421c.jpg",
    "delicacy-skewers-suya.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791957925580_23c28535.jpg",
    "delicacy-peppered-meat.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791957925609_6ce6fffb.jpg",
    "delicacy-cocktail-dining.jpg": "C:/Users/jesse/.gemini/antigravity/brain/1534a3ef-1338-4e11-ade1-d5c2c581b4d2/.user_uploaded/media_1791957925613_4034caf0.jpg",
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
    for filename, src in DELICACIES_ASSETS.items():
        out_path = os.path.join(TARGET_DIR, filename)
        upscale_image(src, out_path)
    print("All delicacies images upscaled to 2560px successfully!")

if __name__ == "__main__":
    main()
