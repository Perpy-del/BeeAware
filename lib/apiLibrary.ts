export const getAllData = async () => {
  const query = `*[_type in ["stis", "consent", "intimacy", "contraception", "communication", "puberty"]] {
    title,
    overview,
    _createdAt,
    keyfacts,
    scope,
    content,
    "mainImage": mainImage.asset->url,
    "mainVideo": mainVideo.asset->url,
    _id,
    slug,
    conclusion,
    videoAuthor
  }`
}

export const getSTIData = async () => {
  const query = `*[_type == 'stis'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};

export const getConsentData = async () => {
  const query = `*[_type == 'consent'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};

export const getCommunicationData = async () => {
  const query = `*[_type == 'communication'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};

export const getContraceptionData = async () => {
  const query = `*[_type == 'contraception'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};

export const getIntimacyData = async () => {
  const query = `*[_type == 'intimacy'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};

export const getPubertyData = async () => {
  const query = `*[_type == 'puberty'] {
        title,
        overview,
        _createdAt,
        keyfacts,
        scope,
        content,
        "mainImage": mainImage.asset->url,
        "mainVideo": mainVideo.asset->url,
        _id,
        slug,
        conclusion,
        videoAuthor
      }`;
};
