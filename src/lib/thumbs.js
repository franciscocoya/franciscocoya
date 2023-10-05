const thumbnails_opt = {
  spotify_clone:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544708/work_thumbs/webp/thumbnail_spotify_clone_uly8vl_ordcxu.webp',
  leoncamp:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544705/work_thumbs/webp/thumbnail_leoncamp_app_befypp_m2xqxf.webp',
  lomap:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544699/work_thumbs/webp/lomap_thumbnail_work_zzcgbt_kvjzsy.webp',
  helpme:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544704/work_thumbs/webp/thumbnail_helpme_android_app_tfxdos_enla5u.webp',
  personal_website:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544706/work_thumbs/webp/thumbnail_personal_website_wudutd_nsqnin.webp',
  basic_crawler:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544702/work_thumbs/webp/thumbnail_basic_crawler_ymfrwc_nxzxkh.webp',
  mywallapop:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544701/work_thumbs/webp/mywallapop_thumbnail_work_v1uefd_skyref.webp',
  instagram_unfollower:
    'https://res.cloudinary.com/dx94yprzj/image/upload/v1695544698/work_thumbs/webp/instagram_unfollower_thumbnail_work_c6e8el_p4aub4.webp',
  san_ignacio_school:
    'https://www.sanignacioponferrada.com/images/web/2020/Fachada2.jpg',
}

const getWorkThumbnail = (work_shortname) =>
  thumbnails_opt[work_shortname] ??
  'https://placehold.co/600x400@2x/webp?text=No+Image+Found'

export { getWorkThumbnail }
