'use server';

import { client } from './sanity';

export const getAllData = async () => {
  try {
    const query = `*[_type in ["stis", "consent", "communication", "contraception", "intimacy", "puberty"]] {
      title,
      overview,
        _createdAt,
        keyfacts,
        content,
        "mainImage": mainImage.asset->url,
          "mainVideo": mainVideo.asset->url,
            _id,
        slug
    }`;
    const data = await client.fetch(query);
    const resData = await data;
    return resData;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getSlugData = async(slug: string) => {
  try {
    const query = `*[_type in ["stis", "consent", "communication", "contraception", "intimacy", "puberty"] && slug.current == "${slug}"] {
      title,
      overview,
        _createdAt,
        keyfacts,
        content,
        "mainImage": mainImage.asset->url,
          "mainVideo": mainVideo.asset->url,
            _id,
        slug
    }[0]`;
    const data = await client.fetch(query);
    const resData = await data;
    return resData;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
}

export const getSTIData = async () => {
  try {
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
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getConsentData = async () => {
  try {
    const query = `*[_type == 'consent'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getCommunicationData = async () => {
  try {
    const query = `*[_type == 'communication'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getContraceptionData = async () => {
  try {
    const query = `*[_type == 'contraception'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getIntimacyData = async () => {
  try {
    const query = `*[_type == 'intimacy'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};

export const getPubertyData = async () => {
  try {
    const query = `*[_type == 'puberty'] {
        title,
        overview,
          _createdAt,
          keyfacts,
          content,
          "mainImage": mainImage.asset->url,
            "mainVideo": mainVideo.asset->url,
              _id,
          slug
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
};
