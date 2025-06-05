from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/posts")
async def get_posts():
    return [
        {
            "title": "Latest Post Title",
            "desc": "A brief description of the latest blog post goes here.",
            "tags": ["design", "programming"],
        },
        {
            "title": "Another Post Title",
            "desc": "A brief description of another blog post goes here.",
            "tags": ["science"],
        },
        {
            "title": "Swiss Design",
            "desc": "Exploring the principles of Swiss design in web development.",
            "tags": ["design"],
        },
        {
            "title": "Minimalism",
            "desc": "Why less is more in modern UI/UX.",
            "tags": ["design", "science"],
        },
        {
            "title": "Typography",
            "desc": "The art of type in digital design.",
            "tags": ["design"],
        },
        {
            "title": "Color Theory",
            "desc": "How to use color effectively in your projects.",
            "tags": ["design", "science", "maths"],
        },
    ]
