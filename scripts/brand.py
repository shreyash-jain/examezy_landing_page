"""Generate public/ logo SVGs with the wordmark outlined to paths (Space Grotesk 700). Run: python3 scripts/brand.py"""
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

font = instantiateVariableFont(TTFont("src/fonts/space-grotesk-var.woff2"), {"wght": 700})
gs = font.getGlyphSet()
cmap = font.getBestCmap()
upm = font["head"].unitsPerEm
asc = font["hhea"].ascent

MARK = '''<rect width="40" height="40" rx="11" fill="#0A1024"/>
<circle cx="13.5" cy="13.5" r="5.2" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.2"/>
<circle cx="26.5" cy="13.5" r="5.2" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.2"/>
<circle cx="13.5" cy="26.5" r="5.2" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.2"/>
<circle cx="26.5" cy="26.5" r="6.3" fill="#FFB31A"/>
<path d="M23.4 26.6l2.2 2.2 4.1-4.6" fill="none" stroke="#0A1024" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>'''

def word(text, size, x0, baseline, tracking=-0.04):
    paths, x = [], x0
    scale = size / upm
    for ch in text:
        g = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        tp = TransformPen(pen, (scale, 0, 0, -scale, x, baseline))
        gs[g].draw(tp)
        paths.append(pen.getCommands())
        x += gs[g].width * scale + tracking * size
    return paths, x

def logo(ink, accent, name):
    size = 30
    a, xa = word("exam", size, 50, 29)
    b, xb = word("ezy", size, xa, 29)
    w = round(xb + 2)
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} 40" width="{w*2}" height="80"><title>Examezy</title>{MARK}<path fill="{ink}" d="{" ".join(a)}"/><path fill="{accent}" d="{" ".join(b)}"/></svg>'
    open(f"public/{name}", "w").write(svg)
    return w

w = logo("#0A1024", "#2B50FF", "logo.svg")
logo("#FFFFFF", "#8FA5FF", "logo-white.svg")
open("public/logo-mark.svg", "w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="160" height="160"><title>Examezy</title>{MARK}</svg>')
open("public/favicon.svg", "w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">{MARK}</svg>')
print("logo width", w)
