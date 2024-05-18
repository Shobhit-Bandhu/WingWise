# **WingWise**

## About
WingWise is a web application that can identify the species of butterfly or moth in an image.
 
The model uses transfer learning a pre-trained model: MobileNetV3-Large to identify the species of butterfly or moth in an image.

- Backend with Python 3.10.x and FastAPI
- HTML, Vanilla CSS, JS for frontend
- Used MobileNetV3-Large for Transfer Learning model, attaining validation F1 score of 0.95xx
- Model is trained on: https://www.kaggle.com/datasets/gpiosenka/butterfly-images40-species

## Note
We have made an assumption that uploaded image is indeed of a butterfly or moth. 

This is simply a model to discern the species of a butterfly or moth.

For further information on the trained species, refer to "saved_model/class_names.txt" 

## How to run

- Clone the project using
```
git clone https://github.com/Shobhit-Bandhu/WingWise
```
- To run the app, execute the following in terminal
```
cd api
pip install -r requirements.txt
python main.py
```
- Now run the frontend using:
http://localhost:8000
