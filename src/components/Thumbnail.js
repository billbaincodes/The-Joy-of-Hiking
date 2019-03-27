import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = () => {
  let logger = () => {
    console.log("heyo");
  };

  return (
    <Link to="p4">
      <div onClick={logger} className="img__wrap">
        <img
          alt="hike-thumb"
          className="img__img"
          src="https://lh3.googleusercontent.com/gAJF-qBxbYYbpgRsw7WbQ_-nmbxWXMAJZCpJqUqVBNAqdS9LvFp2blXE-i0led09dJks_vlODNd2K2LKEI-gEpocMk82xKJHuosBAZcgKtf0TfV2xz6bGWrse7oPgUnk5nTw9_qIStotoNUvfRjia8OeVdwJOTkYzkcYy8rxxUNvFZvrj4bg97Kg8grIu_MtX7eNFRBITkw5Eeyds7NqGLob5R5H2WTVgcmPF6CtSo_WqE18K_dHhwEOYIJnTjNsM8XeTa_EkEgL8HBfdWLDsbhwkJS-dmwVHIh-V7DW3t1kXOjRRVAQ1k8J7QNvm0-mV1mGLhIt8dUTqYntOZnv-FedfnHUUZDzgWEAc9lNJ2tdz1x7NjKqVbCkIdyB_L70M790eDoKcvjEK7wEgr0cW617C1hcFAUYDIeNgkGECV2gWlJMQjMWV4gu71aZL5NiXRgE5pCyWQhDVuXwo5F7Goe9bffQrsb1YetPEW42hCpA-4TnpP5cb51kEwPLKjuq-9CDJaM-gaoRo1fK-Sg2vYlfkuJga8iyWc273dJ_5BPVP-zYfo9WQcO1pzQDFi26Qal8qpnMQIsnjdf0YSOoXuIw38TViZE2BKEqkbVU8r2EJjDoppJTdPQgCHBayJ82uf2dQDvTwNr02LIc_ARpjeeM7RwUVtH3PxYoWSrVzCKv4Fsoq5We1AKNZkXpinQJDzIS8Il44rPrAqiDn0-lI3B3=w2322-h1452-no"
        />
        <div className="img__description_layer">
          <p className="img__description">Herman Gulch</p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
