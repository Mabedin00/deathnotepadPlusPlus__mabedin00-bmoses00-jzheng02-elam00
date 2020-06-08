var map_data = {
  'ocean_road': {
    'tiles': ocean_road,
    'type': 'linear',
    'num_paths': 1,
    'xlist': [620, 620, 500, 500, 80, 80,  166, 171, 249, 249, 334, 334, 414, 414, 516, 516, 620, 620, 319, 319, -40],
    'ylist': [0,   148, 148, 88,  88, 248, 248, 184, 184, 254, 254, 185, 185, 335, 335, 236, 236, 400, 400, 340, 340]
  },
  'floating_island': {
    'tiles': floating_island,
    'type': 'catmull',
    'num_paths': 1,
    'xlist': [0,   17,  33,  50,  66,  105, 145, 183, 223, 258, 283, 294, 297, 314, 360, 403, 444, 481, 494, 487, 465, 444, 444, 458, 480, 514, 547, 582, 612, 626, 626, 614, 590, 560, 538, 507, 481, 455, 441, 427, 404, 373, 341, 308, 280, 250, 219, 188, 152, 119, 77 , 53,  21,  0],
    'ylist': [382, 373, 364, 357, 348, 330, 311, 303, 302, 315, 341, 377, 408, 436, 449, 450, 440, 421, 390, 356, 320, 286, 259, 233, 212, 201, 198, 191, 171, 141, 111, 81,  62,  51,  44,  49,  54,  72,  96,  121, 135, 146, 152, 159, 159, 162, 163, 163, 164, 168, 175, 180, 190, 198]
  },
  'castle': {
    'tiles': castle,
    'type': 'catmull',
    'num_paths': 2,
    'xlist' : [],
    'ylist' : [],
    'xlist1': [],
    'ylist1': [],
  },
  'lightning_scar': {
    'tiles': lightning_scar,
    'type': 'linear',
    'num_paths': 2,
    'xlist': [],
    'ylist': [],
    'xlist1': [],
    'ylist1': [],
  },
  'space_trucking': {
    'tiles': space_trucking,
    'type': 'catmull',
    'num_paths': 1,
    'xlist': [],
    'ylist': [],
  },
  'scorched_earth': {
    'tiles': scorched_earth,
    'type': 'catmull',
    'num_paths': 3,
    'xlist': [],
    'ylist': [],
    'xlist1': [],
    'ylist1': [],
    'xlist2': [],
    'ylist2': [],
  },
}
// 'bloons' : [Red, Blue, Green, Yellow, Pink, White, Black, Zebra, Rainbow, Ceramic, MOAB]
var level_data = [
    {
      'tick': 0,
      'bloons': [0]
    },
    {
      'tick': 1,
      'bloons': [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
      'tick': 1.5,
      'bloons': [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      'tick': 2,
      'bloons': [15, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      'tick': 'algorithm',
      'bloons': ['algorithm']
    }

    // {
    //   'tick': 1,
    //   'bloons': [20]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [35]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [25,5]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [35,18]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [5,27]
    // },
    // // LEVEL 6
    // {
    //   'tick': 1,
    //   'bloons': [15,15,4]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [20,20,5]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [10,20,14]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [0,0,30]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [0,102]
    // },
    // // LEVEL 11
    // {
    //   'tick': 1,
    //   'bloons': [6,12,12,3]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [0,15,10,5]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [0,50,23]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [49,15,10,9]
    // },
    // {
    //   'tick': 1,
    //   'bloons': [20,15,12,10,5]
    // },
    // // LEVEL 16
    // {
    //   'tick': 1,
    //   'bloons': [0,0,40,8]
    // },
    // // 12 YELLOW REGROWTH
]
