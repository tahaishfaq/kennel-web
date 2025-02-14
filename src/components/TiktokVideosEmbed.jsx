import React, { useEffect } from "react";

const TiktokVideosEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@pikmepets"
        data-unique-id="pikmepets"
        data-embed-type="creator"
        style={{ maxWidth: "1280px", minWidth: "288px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@pikmepets?refer=creator_embed"
          >
            @pikmepets
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TiktokVideosEmbed;
