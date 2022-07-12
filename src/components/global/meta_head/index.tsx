/**
 * @author created by MotionBox team
 */

import Head from "next/head";

interface Iprops {
  /**
   * Atach meta title on page
   * @param {string} title
   */
  title: string;
  /**
   * Atach meta description for
   * search engines on related page
   * @param {string} description
   */
  description: string;
  /**
   * Atach meta title for search engines,
   * it doesn't affect to page title at all
   * @param {string} [meta_title]
   * by default gets gets title param
   */
  meta_title?: string;
  /**
   * Atach description to social media
   * @param {string} [meta_description]
   * by default gets gets `description`
   */
  meta_description?: string;
  /**
   * Atach image to social media
   * @param {url} [meta_image]
   * by default gets gets logo image
   */
  meta_image?: string;
}

/**
 * Atach meta data head to page, where it was imported
 * @param {Props} props
 * @prop {string} title
 * @prop {string} description
 * @prop {string} [meta_title]
 * @prop {string} [meta_description]
 * @prop {url} [meta_image]
 */
const MetaHead = (props: Iprops) => {
  const { title, description, meta_title, meta_description, meta_image } =
    props;
  const site_name = "test.uz";
  const site_url = "https://test.uz/";
  const place_holder_image =
    "https://res.cloudinary.com/swiss-dental/image/upload/v1647647992/home_page_meta_image_ulos5e.png";
  const twitter_card = "summary_large_image";
  return (
    <Head>
      {/* Constat meta data */}
      <meta property="og:type" content="website" />
      <meta property="og:siteName" content={site_name} />
      <meta property="og:url" content={site_url} />
      <meta property="twitter:url" content={site_url} />
      <meta property="twitter:card" content={twitter_card} />

      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={meta_title || title} />
      <meta property="og:title" content={meta_title || title} />
      <meta property="twitter:title" content={meta_title || title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta
        property="og:description"
        content={meta_description || description}
      />
      <meta
        property="twitter:description"
        content={meta_description || description}
      />

      {/* Images */}
      {meta_image && (
        <>
          <meta property="og:image" content={meta_image} />
          <meta property="twitter:image" content={meta_image} />
        </>
      )}
      <meta property="og:image" content={place_holder_image} />
      <meta property="twitter:image" content={place_holder_image} />
    </Head>
  );
};
export default MetaHead;

/* Some cheatsheet:
 * Refresh page on every {n} - seconds:
 * <meta httpEquiv="refresh" content={n}/>
 *
 * Atach author to page:
 * <meta name="author" content="John Doe">
 */
