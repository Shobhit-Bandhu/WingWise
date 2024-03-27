from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import os

app = FastAPI()

trained_model = tf.keras.models.load_model("saved_model/trained_model.keras")

# Import classes
filename = "saved_model/class_names.txt"
class_names = []

with open(filename, "r") as file:
  lines = file.readlines()

  for line in lines:
    class_names.append(line.rstrip("\n"))



@app.get("/")
async def home():
    return "welcum ma fren"

@app.get("/ping")
async def ping():
    return f"pinged"

@app.post("/predict")
async def predict(image_file: UploadFile = File(...)):
    image_bytes = await image_file.read()

    image = np.array(
        Image.open(
            BytesIO(image_bytes)
        ).resize((224, 224))
    )

    image_batch = np.expand_dims(image, 0)

    predictions = trained_model.predict(image_batch)

    return {class_names[predictions.argmax()]}

if __name__ == "__main__":
    uvicorn.run(
        app, 
        host='localhost',
        port=8000
    )