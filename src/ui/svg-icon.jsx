import DOMPurify from 'dompurify';

export function normalizeSvg(svg, all = true) {
  if (!all) {
    return svg
      .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
      .replace(/<path\b([^>]*)>/gi, (match, attrs) =>
        attrs.includes('fill=') ? `<path${attrs}>` : `<path fill="currentColor"${attrs}>`,
      );
  }
  return (
    svg
      // remove <style> internos
      .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')

      // remove fill e stroke inline
      .replace(/\sfill="[^"]*"/gi, '')
      .replace(/\sstroke="[^"]*"/gi, '')

      // remove fill/stroke em style=""
      .replace(/style="[^"]*(fill|stroke)[^"]*"/gi, '')

      // garante currentColor nos paths
      .replace(/<path\b([^>]*)>/gi, (match, attrs) =>
        attrs.includes('fill=') ? `<path${attrs}>` : `<path fill="currentColor"${attrs}>`,
      )
  );
}

export function parseSafeSvg(svgString, normalize = true) {
  const normalized = normalizeSvg(svgString, normalize);

  return DOMPurify.sanitize(normalized, {
    USE_PROFILES: { svg: true },
  });
}

export function SvgIcon({ svg, className, size = 5, color, fill, normalize = true, ...props }) {
  const safeSvg = parseSafeSvg(svg, normalize);
  return (
    <span className={`relative inline [&>svg]:shrink-0 `} {...props}>
      <svg
        {...props}
        style={{
          width: `${(size * 4) / 16}rem`,
          height: `${(size * 4) / 16}rem`,
        }}
        color={color || 'currentColor'}
        fill={fill || 'none'}
        dangerouslySetInnerHTML={{ __html: safeSvg }}
        className={className + ' pr-px'}
      />
    </span>
  );
}

