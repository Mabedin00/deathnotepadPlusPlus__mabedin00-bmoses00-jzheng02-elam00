var map_data = {
  'ocean_road': {
    'tiles': ocean_road,
    'speed_multiplier': .8,
    'type': 'linear',
    'num_paths': 1,
    'xlist': [620, 620, 500, 500, 80, 80,  166, 171, 249, 249, 334, 334, 414, 414, 516, 516, 620, 620, 319, 319, -40],
    'ylist': [0,   148, 148, 88,  88, 248, 248, 184, 184, 254, 254, 185, 185, 335, 335, 236, 236, 400, 400, 340, 340]
  },
  'floating_island': {
    'tiles': floating_island,
    'speed_multiplier': .3,
    'type': 'catmull',
    'num_paths': 1,
    'xlist': [0,   17,  33,  50,  66,  105, 145, 183, 223, 258, 283, 294, 297, 314, 360, 403, 444, 481, 494, 487, 465, 444, 444, 458, 480, 514, 547, 582, 612, 626, 626, 614, 590, 560, 538, 507, 481, 455, 441, 427, 404, 373, 341, 308, 280, 250, 219, 188, 152, 119, 77 , 53,  21,  0],
    'ylist': [382, 373, 364, 357, 348, 330, 311, 303, 302, 315, 341, 377, 408, 436, 449, 450, 440, 421, 390, 356, 320, 286, 259, 233, 212, 201, 198, 191, 171, 141, 111, 81,  62,  51,  44,  49,  54,  72,  96,  121, 135, 146, 152, 159, 159, 162, 163, 163, 164, 168, 175, 180, 190, 198]
  },
  'castlemania': {
    'tiles': castlemania,
    'speed_multiplier': .25,
    'type': 'catmull',
    'num_paths': 2,
    'xlist': [330, 330, 330, 334, 308, 291, 282, 279, 252, 228, 207, 184, 166, 145, 137, 126, 109, 90,  70,  57,  50,  53,  67,  74,  75,  76,  77,  80,  81,  70,  61,  58,  55,  57,  66,  78,  98, 118, 137, 148, 165, 188, 212, 231, 251, 273, 294, 314, 336, 355, /*HERE*/358, 353, 348, 343, 339, 335],
    'ylist': [505, 475, 445, 423, 423, 422, 406, 395, 395, 395, 395, 395, 395, 395, 406, 417, 424, 426, 418, 404, 385, 360, 337, 325, 293, 270, 245, 215, 191, 180, 167, 153, 139, 125, 111, 100, 94, 97,  106, 116, 115, 113, 111, 109, 107, 105, 104, 101, 99,  95,          81,  62,  46,  28,  12,  0],
    'xlist1': [422, 422, 422, 422, 447, 466, 477, 482, 508, 531, 539, 552, 570, 591, 604, 614, 614, 608, 596, 585, 585, 585, 587, 602, 615, 624, 630, 633, 630, 624, 615, 596, 575, 558, 546, 530, 518, 504, 492, 488, 487, 480, 469, 454, 441, 427, 414, 404, 392, 388, 383, 373, 365, 358, 353, 348, 343, 339, 335],
    'ylist1': [505, 475, 445, 423, 423, 418, 404, 395, 392, 394, 408, 418, 422, 414, 401, 385, 364, 348, 331, 318, 304, 282, 265, 259, 250, 239, 226, 211, 196, 182, 171, 158, 156, 160, 151, 139, 126, 113, 102, 86,  68,  51,  40,  33,  30,  33,  40,  49,  62,  80,  93,  95,  89, 81,  62,  46,  28,  12,  0]
  },
  'lightning_scar': {
    'tiles': lightning_scar,
    'speed_multiplier': 1.25,
    'type': 'linear',
    'num_paths': 2,
    'xlist': [584, 317, 440, 324, 180, 292, 37],
    'ylist': [0,   169, 174, 251, 344, 351, 506],
    'xlist1': [584, 317, 440, 324, 562, 434, 634, 564],
    'ylist1': [0,   169, 174, 251, 264, 400, 393, 505]
  },
  'cubism': {
    'tiles': cubism,
    'speed_multiplier': .8,
    'type': 'linear',
    'num_paths': 1,
    'xlist': [0,  395, 413, 143, 96,  546, 540, 356, 221, 398, 640, 496, 682],
    'ylist': [86, 358, 261, 347, 240, 141, 251, 26,  300, 480, 308, 333, 384]
  },
  'scorched_earth': {
    'tiles': scorched_earth,
    'speed_multiplier': .125,
    'type': 'catmull',
    'num_paths': 3,
    'xlist': [188, 194, 200, 206, 212, 218, 224, 230, 236, 241, 247, 253, 259, 265, 271, 277, 283, 289, 295, 301, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360, 366, 371, 377, 383, 389, 395, 401,/* 411,*/ 396, 381, 364, 347, 330, 313, 296, 281, 266, 252, 239, 228, 219, 212, 207, 204, 203, 204, 207, 212, 219, 228, 239, 252, 266, 281, 296, 313, 330, 347, 364, 381, 396, 411, 425, 438, 449, 458, 465, 470, 473, 475, 473, 470, 465, 458, 449, 438, 425, 411, 409, 416, 422, 428, 434, 440, 446, 452, 458, 464, 471, 477, 483],
    'ylist': [9,   19,  29,  39,  49,  59,  69,  79,  89,  99,  109, 119, 129, 139, 149, 159, 169, 179, 189, 199, 209, 219, 229, 239, 249, 259, 269, 279, 289, 299, 309, 319, 329, 339, 349, 359, 369,/* 370,*/ 379, 385, 389, 391, 391, 389, 385, 379, 370, 360, 349, 335, 321, 306, 289, 273, 256, 238, 222, 205, 190, 176, 162, 151, 141, 132, 126, 122, 120, 120, 122, 126, 132, 141, 151, 162, 176, 190, 205, 222, 238, 255, 273, 289, 306, 321, 335, 349, 360, 370, 384, 394, 404, 414, 424, 434, 444, 454, 464, 474, 484, 494, 504],
    'xlist1': [488, 482, 476, 470, 464, 458, 452, 446, 440, 435, 429, 423, 417, 411, 405, 399, 393, 387, 381, 376, 370, 364, 358, 352, 346, 340, 334, 328, 322, 317, 311, 305, 299, 293, 287, 281, 275, 266, 252, 239, 228, 219, 212, 207, 204, 203, 204, 207, 212, 219, 228, 239, 252, 266, 281, 296, 313, 330, 347, 364, 381, 396, 411, 425, 438, 449, 458, 465, 470, 473, 475, 473, 470, 465, 458, 449, 438, 425, 411, 396, 381, 364, 347, 330, 313, 296, 281, 267, 261, 255, 250, 244, 239, 233, 227, 222, 216, 210, 205, 199],
    'ylist1': [4,  14, 24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144, 154, 164, 174, 184, 194, 204, 214, 224, 234, 244, 254, 264, 274, 284, 294, 304, 314, 324, 334, 344, 354, 364, 360, 349, 335, 321, 306, 289, 273, 256, 238, 222, 205, 190, 176, 162, 151, 141, 132, 126, 122, 120, 120, 122, 126, 132, 141, 151, 162, 176, 190, 205, 222, 238, 255, 273, 289, 306, 321, 335, 349, 360, 370, 379, 385, 389, 391, 391, 389, 385, 379, 377, 387, 397, 407, 417, 427, 437, 447, 457, 467, 477, 487, 497],
    'xlist2': [682, 672, 662, 652, 642, 632, 622, 612, 602, 592, 582, 572, 562, 552, 542, 532, 522, 512, 502, 492, 482, 472, 462, 452, 442, 432, 422, 412, 402, 392, 382, 372, 362, 352, 342, 332, 322, 312, 302, 292, 282, 272, 262, 252, 242, 232, 222, 212, 202, 204, 207, 212, 219, 228, 239, 252, 266, 281, 296, 313, 330, 347, 364, 381, 396, 411, 425, 438, 449, 458, 465, 470, 473, 475, 473, 470, 465, 458, 449, 438, 425, 411, 396, 381, 364, 347, 330, 313, 296, 281, 266, 252, 239, 228, 219, 212, 207, 204, 203, 199, 189, 179, 169, 159, 149, 139, 129, 119, 109, 99, 89, 79, 69, 59, 49, 39, 29, 19, 9, 0],
    'ylist2': [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 238, 222, 205, 190, 176, 162, 151, 141, 132, 126, 122, 120, 120, 122, 126, 132, 141, 151, 162, 176, 190, 205, 222, 238, 255, 273, 289, 306, 321, 335, 349, 360, 370, 379, 385, 389, 391, 391, 389, 385, 379, 370, 360, 349, 335, 321, 306, 289, 273, 256, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
  },
}
// 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB,
//             Red Camo, Blue Camo, Green Camo, Yellow Camo, Pink Camo, White Camo, Black Camo, Zebra Camo, Rainbow Camo, Ceramic Camo,
//             Red Regen, Blue Regen, Green Regen, Yellow Regen, Pink Regen, White Regen, Black Regen, Zebra Regen, Rainbow Regen, Ceramic Regen]
var level_data = [
    {
      'tick': 1,
      'bloons': [0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0  ]
    },
    {
      'tick': 1.6,
      'bloons': [0,0,0,0,0,1,1,0,0,0,0,
                 1,1,1,1,1,1,1,1,1,1,
                 1,1,1,1,1,1,1,1,1,1 ]
    },
    // {
    //   'tick': 1.6,
    //   'bloons': [35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 1.6,
    //   'bloons': [25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 1.6,
    //   'bloons': [35,18, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 1.8,
    //   'bloons': [5, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // // LEVEL 6
    // {
    //   'tick': 2,
    //   'bloons': [15, 15,4, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 2,
    //   'bloons': [20, 20,5, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 2,
    //   'bloons': [10,20,14, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 2,
    //   'bloons': [0,0,30, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 2.1,
    //   'bloons': [0,102, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // },
    // // LEVEL 11
    // {
    //   'tick': 2.2,
    //   'bloons': [6,12,12,3, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //   'tick': 2.3,
    //   'bloons': [0,15,10,5,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.4,
    //   'bloons': [0,50,23,0,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.5,
    //   'bloons': [49,15,10,9,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.6,
    //   'bloons': [20,15,12,10,5,0,0,0,0,0,0]
    // },
    // // LEVEL 16
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,40,8,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,16,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,80,2,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,10,10,15,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,6,0,0,0,0]
    // },
    // // LEVEL 21
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,40,14,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,16,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,7,7,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,20,0,0,1,1,1,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,25,2,2,2,0,0,0,0,0]
    // },
    // // 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
    // // LEVEL 26
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,23,0,0,4,0,0,0]
    // },
    // {
    //     'tick': 2.7,
    //     'bloons': [100,60,45,45,0,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,2,2,2,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,5,50,10,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,3,3,3,0,0,0]
    // },
    // // 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
    // // LEVEL 31
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,9,9,9,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,14,18,23,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [20,20,20,15,10,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,160,0,0,0,6,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,35,25,30,0,5,0,0]
    // },
    // // 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
    // // LEVEL 36
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,20,20,100,0,0,0,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,25,25,10,5,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,42,17,14,10,0,2,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,10,10,20,18,2,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,0,0,0,0,1]
    // },
    // // 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
    // // LEVEL 41
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,60,60,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,0,15,8,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,0,0,10,7,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,0,50,0,0,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,180,7,7,10,25,0,0]
    // },
    // // 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
    // // LEVEL 46
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,0,0,0,0,0,12,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,140,0,0,0,0,12,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,0,0,80,20,20,0,40,6,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [0,0,343,0,0,5,5,20,20,18,0]
    // },
    // {
    //   'tick': 2.7,
    //   'bloons': [20,0,0,0,0,0,0,10,0,20,2]
    // },
    {
      'tick': 'algorithm',
      'bloons': ['algorithm']
    },

    // // 12 YELLOW REGROWTH
]
