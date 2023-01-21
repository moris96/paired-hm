# Paired Homework

## Challenge 1
* Driver: Moris
* Navigator: Peter

```js
//takes an input x
function addTwo(x){
    //returns x with 2 added to it
    return x += 2
}
console.log(addTwo(5))
```

## Challenge 2
* Driver: Peter
* Navigator: Moris

```js
//takes and input - input
const addS = (input) => {
  //converts the input to a string and concatenates 's' to it. toString() is used to convert numbers to strings
  const newString = input.toString() + 'S'
  return newString
}

console.log(addS('f'))
// console.log(addS(2))
```

## Challenge 3
* Driver: Moris
* Navigator: Peter

```js
let nums = [1,2,3,4,5]

//takes in nums arguement from below
function multiply2(nums){
    for(let i in nums){
        //replaces the current position in the array with the num * 2
        nums[i] = nums[i] * 2
    }
}

//passes in nums array 
function map(nums){
    //callback function passing in the nums array
    multiply2(nums)
    //returns the resule
    return nums
}

//calls the map function and passes in the nums array
console.log(map(nums))
```

## Challenge 4
* Driver: Peter
* Navigator: Moris
```js
let alphabet = ''
const letters = ['a', 'b', 'c', 'd']

//callback function concatenating the alphabet string with teh current letter
function concat(letter){
    alphabet += letter
}

//loops over each element in the array and calls the concat function, passing in the current letter iteration
letters.forEach((letter) => concat(letter))

console.log(alphabet)
```

## Challenge 5
* Driver: Moris
* Navigator: Peter
### Server.js
```js
//require express and setting variable
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3008 

app.get('/', function (req, res) {
    res.send('Hello World')
})

  app.use(express.json())// req.body
  app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
//requiring the routes
app.use('/api/blogs', require('./routes'))

//setting up the port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})



```
### Controllers
```js
//requiring the blogs.js data
const Blog = require('./blog/blog')

//index controller
async function index(req, res){
    try{
        res.status(200).json(Blog)
    } catch(e){
        res.status(400).json(e)
    }
}

//create controller
async function create(req, res){
    try{
        //awaiting the new blog info
        const newBlog = await req.body
        //pusing the new blog into the Blog array
        Blog.push(newBlog)
        res.status(200).json(Blog)
    } catch(e){
        res.status(400).json(e)
    }
}
//show
async function show(req, res){
    try{
        //finding the index of the blog matching the id passed in 
        const ind = Blog.findIndex(item => item.id == req.params.id)
        // console.log(Blog[ind])
        //sending the blog at the stored index
        res.status(200).json(Blog[ind])
    } catch(e){
        res.status(400).json(e)
    }
}

module.exports = { index, create, show }
```


### Routes
```js
//requiring express so that .router() can be used
//for http routing
//Also, requiring the data controllers in the controllers.js folder
const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

//index blogs/
router.get('/', controllers.index)
//create blogs/
router.post('/', controllers.create)
//show blogs/:id
router.get('/:id', controllers.show)

module.exports = router
```


