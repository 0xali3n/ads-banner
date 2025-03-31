from flask import Flask, jsonify, request
from flask_cors import CORS
from src.flow_after_imagegen import flow
from src.gemini_utils import gemini_for_chatbot, get_gemini_response
from src.imagen import get_imagen_images
from src.prompts import CAPTION_PROMPT, get_imagen_stage_prompt

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

// ... existing code ... 