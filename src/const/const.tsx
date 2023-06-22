export const BASE_URL = {
    url: 'http://a0830433.xsph.ru/',
} as const;

export const controls_buttons_name = {
    button_left: 'Левый',
    button_center: 'Центр',
    button_right: 'Правый',
}

export const framerMotionAnimateSettings = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0.3 },
  };
