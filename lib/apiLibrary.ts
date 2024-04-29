import { client } from './sanity';

export const getAllData = async () => {
  const query = `*[_type in ["stis", "consent", "intimacy", "contraception", "communication", "puberty"]] {
    title,
    focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getSTIData = async () => {
  const query = `*[_type == 'stis'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getConsentData = async () => {
  const query = `*[_type == 'consent'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getCommunicationData = async () => {
  const query = `*[_type == 'communication'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getContraceptionData = async () => {
  const query = `*[_type == 'contraception'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getIntimacyData = async () => {
  const query = `*[_type == 'intimacy'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};

export const getPubertyData = async () => {
  const query = `*[_type == 'puberty'] {
        title,
        focus,
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

  const data = await client.fetch(query);
  return data;
};
