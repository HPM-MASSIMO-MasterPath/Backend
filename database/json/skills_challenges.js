const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      { id_skill: 8, id_challenge: 94 },
      { id_skill: 8, id_challenge: 156 },
      { id_skill: 4, id_challenge: 10 },
      { id_skill: 2, id_challenge: 130 },
      { id_skill: 10, id_challenge: 107 },
      { id_skill: 2, id_challenge: 139 },
      { id_skill: 7, id_challenge: 25 },
      { id_skill: 7, id_challenge: 172 },
      { id_skill: 3, id_challenge: 62 },
      { id_skill: 1, id_challenge: 101 },
      { id_skill: 2, id_challenge: 162 },
      { id_skill: 8, id_challenge: 4 },
      { id_skill: 8, id_challenge: 89 },
      { id_skill: 6, id_challenge: 14 },
      { id_skill: 1, id_challenge: 35 },
      { id_skill: 3, id_challenge: 4 },
      { id_skill: 10, id_challenge: 92 },
      { id_skill: 8, id_challenge: 40 },
      { id_skill: 5, id_challenge: 141 },
      { id_skill: 9, id_challenge: 102 },
      { id_skill: 5, id_challenge: 43 },
      { id_skill: 6, id_challenge: 100 },
      { id_skill: 4, id_challenge: 80 },
      { id_skill: 2, id_challenge: 55 },
      { id_skill: 10, id_challenge: 133 },
      { id_skill: 8, id_challenge: 106 },
      { id_skill: 9, id_challenge: 155 },
      { id_skill: 1, id_challenge: 10 },
      { id_skill: 10, id_challenge: 163 },
      { id_skill: 10, id_challenge: 63 },
      { id_skill: 9, id_challenge: 76 },
      { id_skill: 8, id_challenge: 70 },
      { id_skill: 5, id_challenge: 184 },
      { id_skill: 10, id_challenge: 163 },
      { id_skill: 10, id_challenge: 139 },
      { id_skill: 7, id_challenge: 30 },
      { id_skill: 10, id_challenge: 18 },
      { id_skill: 2, id_challenge: 68 },
      { id_skill: 8, id_challenge: 100 },
      { id_skill: 6, id_challenge: 199 },
      { id_skill: 2, id_challenge: 47 },
      { id_skill: 10, id_challenge: 135 },
      { id_skill: 6, id_challenge: 165 },
      { id_skill: 7, id_challenge: 83 },
      { id_skill: 2, id_challenge: 15 },
      { id_skill: 9, id_challenge: 23 },
      { id_skill: 10, id_challenge: 94 },
      { id_skill: 3, id_challenge: 85 },
      { id_skill: 8, id_challenge: 8 },
      { id_skill: 8, id_challenge: 3 },
      { id_skill: 2, id_challenge: 154 },
      { id_skill: 10, id_challenge: 160 },
      { id_skill: 4, id_challenge: 181 },
      { id_skill: 10, id_challenge: 28 },
      { id_skill: 10, id_challenge: 153 },
      { id_skill: 10, id_challenge: 103 },
      { id_skill: 10, id_challenge: 103 },
      { id_skill: 2, id_challenge: 104 },
      { id_skill: 10, id_challenge: 172 },
      { id_skill: 5, id_challenge: 32 },
      { id_skill: 2, id_challenge: 149 },
      { id_skill: 6, id_challenge: 190 },
      { id_skill: 10, id_challenge: 102 },
      { id_skill: 9, id_challenge: 109 },
      { id_skill: 10, id_challenge: 108 },
      { id_skill: 5, id_challenge: 105 },
      { id_skill: 7, id_challenge: 27 },
      { id_skill: 10, id_challenge: 198 },
      { id_skill: 10, id_challenge: 29 },
      { id_skill: 9, id_challenge: 166 },
      { id_skill: 7, id_challenge: 26 },
      { id_skill: 5, id_challenge: 162 },
      { id_skill: 8, id_challenge: 6 },
      { id_skill: 10, id_challenge: 183 },
      { id_skill: 10, id_challenge: 167 },
      { id_skill: 1, id_challenge: 30 },
      { id_skill: 1, id_challenge: 194 },
      { id_skill: 10, id_challenge: 173 },
      { id_skill: 10, id_challenge: 39 },
      { id_skill: 9, id_challenge: 37 },
      { id_skill: 1, id_challenge: 106 },
      { id_skill: 4, id_challenge: 20 },
      { id_skill: 1, id_challenge: 55 },
      { id_skill: 1, id_challenge: 43 },
      { id_skill: 1, id_challenge: 79 },
      { id_skill: 9, id_challenge: 170 },
      { id_skill: 5, id_challenge: 76 },
      { id_skill: 10, id_challenge: 193 },
      { id_skill: 7, id_challenge: 96 },
      { id_skill: 10, id_challenge: 195 },
      { id_skill: 9, id_challenge: 176 },
      { id_skill: 9, id_challenge: 66 },
      { id_skill: 8, id_challenge: 176 },
      { id_skill: 4, id_challenge: 105 },
      { id_skill: 10, id_challenge: 127 },
      { id_skill: 2, id_challenge: 191 },
      { id_skill: 9, id_challenge: 195 },
      { id_skill: 9, id_challenge: 154 },
      { id_skill: 9, id_challenge: 107 },
      { id_skill: 3, id_challenge: 133 },
      { id_skill: 3, id_challenge: 132 },
      { id_skill: 5, id_challenge: 28 },
      { id_skill: 10, id_challenge: 140 },
      { id_skill: 5, id_challenge: 162 },
      { id_skill: 6, id_challenge: 173 },
      { id_skill: 3, id_challenge: 15 },
      { id_skill: 10, id_challenge: 102 },
      { id_skill: 3, id_challenge: 70 },
      { id_skill: 8, id_challenge: 15 },
      { id_skill: 10, id_challenge: 132 },
      { id_skill: 4, id_challenge: 63 },
      { id_skill: 10, id_challenge: 160 },
      { id_skill: 6, id_challenge: 31 },
      { id_skill: 7, id_challenge: 157 },
      { id_skill: 10, id_challenge: 60 },
      { id_skill: 6, id_challenge: 48 },
      { id_skill: 4, id_challenge: 40 },
      { id_skill: 8, id_challenge: 132 },
      { id_skill: 6, id_challenge: 105 },
      { id_skill: 6, id_challenge: 43 },
      { id_skill: 1, id_challenge: 43 },
      { id_skill: 5, id_challenge: 137 },
      { id_skill: 6, id_challenge: 69 },
      { id_skill: 6, id_challenge: 34 },
      { id_skill: 10, id_challenge: 57 },
      { id_skill: 9, id_challenge: 181 },
      { id_skill: 5, id_challenge: 154 },
      { id_skill: 6, id_challenge: 105 },
      { id_skill: 10, id_challenge: 26 },
      { id_skill: 10, id_challenge: 114 },
      { id_skill: 5, id_challenge: 106 },
      { id_skill: 3, id_challenge: 161 },
      { id_skill: 9, id_challenge: 93 },
      { id_skill: 7, id_challenge: 57 },
      { id_skill: 5, id_challenge: 44 },
      { id_skill: 3, id_challenge: 148 },
      { id_skill: 7, id_challenge: 83 },
      { id_skill: 5, id_challenge: 189 },
      { id_skill: 3, id_challenge: 86 },
      { id_skill: 10, id_challenge: 4 },
      { id_skill: 1, id_challenge: 66 },
      { id_skill: 10, id_challenge: 173 },
      { id_skill: 1, id_challenge: 154 },
      { id_skill: 10, id_challenge: 105 },
      { id_skill: 1, id_challenge: 90 },
      { id_skill: 10, id_challenge: 105 },
      { id_skill: 8, id_challenge: 108 },
      { id_skill: 2, id_challenge: 154 },
      { id_skill: 1, id_challenge: 34 },
      { id_skill: 10, id_challenge: 141 },
      { id_skill: 9, id_challenge: 168 },
      { id_skill: 9, id_challenge: 53 },
      { id_skill: 8, id_challenge: 133 },
      { id_skill: 2, id_challenge: 109 },
      { id_skill: 10, id_challenge: 168 },
      { id_skill: 10, id_challenge: 70 },
      { id_skill: 10, id_challenge: 137 },
      { id_skill: 3, id_challenge: 181 },
      { id_skill: 7, id_challenge: 170 },
      { id_skill: 5, id_challenge: 107 },
      { id_skill: 10, id_challenge: 25 },
      { id_skill: 10, id_challenge: 10 },
      { id_skill: 3, id_challenge: 17 },
      { id_skill: 4, id_challenge: 100 },
      { id_skill: 5, id_challenge: 99 },
      { id_skill: 6, id_challenge: 17 },
      { id_skill: 10, id_challenge: 49 },
      { id_skill: 6, id_challenge: 10 },
      { id_skill: 8, id_challenge: 143 },
      { id_skill: 3, id_challenge: 177 },
      { id_skill: 9, id_challenge: 199 },
      { id_skill: 10, id_challenge: 151 },
      { id_skill: 5, id_challenge: 6 },
      { id_skill: 10, id_challenge: 167 },
      { id_skill: 2, id_challenge: 1 },
      { id_skill: 10, id_challenge: 191 },
      { id_skill: 3, id_challenge: 108 },
      { id_skill: 10, id_challenge: 98 },
      { id_skill: 10, id_challenge: 52 },
      { id_skill: 4, id_challenge: 71 },
      { id_skill: 9, id_challenge: 166 },
      { id_skill: 8, id_challenge: 73 },
      { id_skill: 10, id_challenge: 195 },
      { id_skill: 10, id_challenge: 34 },
      { id_skill: 4, id_challenge: 79 },
      { id_skill: 10, id_challenge: 74 },
      { id_skill: 8, id_challenge: 193 },
      { id_skill: 9, id_challenge: 109 },
      { id_skill: 9, id_challenge: 64 },
      { id_skill: 4, id_challenge: 47 },
      { id_skill: 10, id_challenge: 13 },
      { id_skill: 8, id_challenge: 30 },
      { id_skill: 10, id_challenge: 10 },
      { id_skill: 6, id_challenge: 189 },
      { id_skill: 8, id_challenge: 146 },
      { id_skill: 4, id_challenge: 9 },
      { id_skill: 8, id_challenge: 42 },
      { id_skill: 5, id_challenge: 61 },
      { id_skill: 7, id_challenge: 32 },
      { id_skill: 10, id_challenge: 73 }
    ]
    const { skillsChallenges } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await skillsChallenges.createOrUpdate({
        skillId: el.id_skill,
        challengeId: el.id_challenge
      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
