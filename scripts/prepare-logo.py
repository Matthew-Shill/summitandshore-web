#!/usr/bin/env python3
"""Remove black background from images/logo-source.png → images/logo.png (no recreation)."""
from PIL import Image

from pathlib import Path

SOURCE = next(
    (p for p in (Path("images/logo-source.png"), Path("images/logo-source.jpg")) if p.exists()),
    Path("images/logo-source.png"),
)
OUTPUT = "images/logo.png"


def is_logo_pixel(r: int, g: int, b: int) -> bool:
    if r > 120 and g > 90 and b < 130 and r >= g:
        return True
    if r > 180 and g > 180 and b > 180:
        return True
    if r > 80 and (r + g) > (b * 2):
        return True
    return False


def main() -> None:
    img = Image.open(SOURCE).convert("RGBA")
    print(f"Using {SOURCE}")
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
    if bbox:
        img = img.crop(bbox)

    img.save(OUTPUT, "PNG")
    print(f"Wrote {OUTPUT} ({img.size[0]}×{img.size[1]})")


if __name__ == "__main__":
    main()
