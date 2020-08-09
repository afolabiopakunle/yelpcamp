const express = require('express')
const app = express()
const faker = require('faker')
const bodyParser = require('body-parser')
const PORT = 3000
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const campgrounds = [
  {
    name: faker.address.county(),
    image: faker.image.nature()
  },
  {
    name: faker.address.county(),
    image: faker.image.nature()
  },
  {
    name: faker.address.county(),
    image: faker.image.nature()
  },
  {
    name: faker.address.county(),
    image: faker.image.nature()
  },
  {
    name: faker.address.county(),
    image: faker.image.nature()
  },
  {
    name: faker.address.county(),
    image: faker.image.nature()
  }
]

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', { campgrounds })
})

app.listen(process.env.PORT || PORT, () =>
  console.log(`app opening on port ${PORT} http://localhost:3000`)
)
