#!/usr/bin/env python3
"""Make transparent floating icon from images/logo-icon-source.* → images/logo-icon.png."""
from pathlib import Path
from PIL import Image

SOURCE = next(
    (
        p
        for p in (
            Path("images/logo-icon-source.png"),
            Path("images/logo-icon-source.jpg"),
            Path("images/logo-icon-source.jpeg"),
        )
        if p.exists()
    ),
    None,
)
OUTPUT = Path("images/logo-icon.png")


def is_logo_pixel(r: int, g: int, b: int) -> bool:
    if r > 120 and g > 90 and b < 130 and r >= g:
        return True
    if r > 180 and g > 180 and b > 180:
        return True
    if r > 80 and (r + g) > (b * 2):
        return True
    return False


def remove_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_logo_pixel(r, g, b):
                continue
            if r < 50 and g < 50 and b < 50:
                pixels[x, y] = (r, g, b, 0)
            elif max(r, g, b) < 70:
                alpha = int(min(255, max(r, g, b) * 4))
                pixels[x, y] = (r, g, b, alpha)
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def main() -> None:
    if SOURCE is None:
        raise SystemExit(
            "Add your icon file as images/logo-icon-source.png (or .jpg), then re-run."
        )
    print(f"Using {SOURCE}")
    icon = remove_background(Image.open(SOURCE))
    icon.save(OUTPUT, "PNG")
    print(f"Wrote {OUTPUT} ({icon.size[0]}×{icon.size[1]})")


if __name__ == "__main__":
    main()
