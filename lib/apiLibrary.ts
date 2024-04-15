export const getSTIData = async () => {
    const query = `*[_type == 'stis'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`
}
