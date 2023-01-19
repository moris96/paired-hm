const Blog = require('./blog/blog')


async function index(req, res){
    try{
        res.status(200).json(Blog)
    } catch(e){
        res.status(400).json(e)
    }
}

async function create(req, res){
    try{
        const newBlog = await req.body
        Blog.push(newBlog)
        res.status(200).json(Blog)
    } catch(e){
        res.status(400).json(e)
    }
}

async function show(req, res){
    console.log(req.params.id)
    try{
        // const index = Blog.forEach(i => i.id === req.params.id)
        const ind = Blog.findIndex(item => item.id == req.params.id)
        console.log(Blog[ind])
        res.status(200).json(Blog[ind])
    } catch(e){
        res.status(400).json(e)
    }
}



module.exports = { index, create, show }