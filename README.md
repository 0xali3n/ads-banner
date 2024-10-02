[Demo video](https://drive.google.com/file/d/1RpR00oyNTcG5PtfLuyuoWugM8Do5crxD/view?usp=sharing)

BannerCraft is an AI-powered platform revolutionizing how businesses create promotional banners. By utilizing Google's Gemini 1.5 Pro and Imagen3, BannerCraft provides a seamless, cost-effective solution for generating professional-quality visual promotions quickly.
BannerCraft addresses a key challenge: the time and cost involved in traditional banner design. It empowers users to produce high-quality banners without needing expensive software or professional designers.


## How BannerCraft Works:
1. User Input: Users upload product images and input promotional details, such as audience, brand guidelines, and campaign goals.
2. AI-Powered Prompt Generation: Gemini 1.5 Pro generates prompts that reflect the product and message accurately.
3. Image Generation: Imagen3 creates high-quality banner images based on these prompts.
4. Customization and Editing: Users can edit banners with tools for text addition, inpainting, color palette adjustment, and more.
5. Output Optimization: Final banners are customized for size, resolution, and format for different marketing channels.
6. BannerCraft evolves through user feedback, continuously improving banner quality and personalization. It's a creative partner for businesses, suitable for e-commerce, social media, and digital marketing. Future enhancements include video generation, platform integration, and AI-driven optimization, positioning BannerCraft as a leader in AI-based design solutions.

## Challenges We Faced

### Prompt Engineering for Gemini 1.5 Pro
A key challenge was fine-tuning prompts for Gemini 1.5 Pro to generate high-quality, contextually relevant banner descriptions. Initially, our prompts resulted in generic or misaligned outputs. We addressed this by implementing a structured prompt template, adding specific details about product placement, lighting, and themes, and using few-shot learning with successful examples. This iterative process significantly improved the quality and relevance of our generated content.

### Integration with Imagen3 API
Handling rate limits and optimizing response times with the Imagen3 API was another challenge. We resolved this by implementing an efficient queuing system to manage requests, caching frequently used elements to reduce API calls, and developing a fallback mechanism for API downtimes. These measures improved the speed and reliability of banner generation.

### Image Editing Performance
Our initial image editor, particularly the inpainting feature, was computationally intensive, causing performance issues on lower-end devices. We optimized our algorithms for efficiency, implemented progressive loading for high-resolution edits, and added client-side caching of edit history to reduce server load. These optimizations led to a smoother editing experience across all devices.

## PS
#9. BigBasket
  ### How does this project fit within the track?

Our project solves the challenge of high-quality banner creation through:

1. AI-Powered Prompt Generation: Using Gemini 1.5 Pro for relevant prompts.
2. High-Quality Banner Creation: Leveraging Imagen3 for banners with integrated product images and themes.
3. Advanced Editing: Providing customization, inpainting, and text addition.

### Why GenAI is the Best Solution:

1. Scalable Content Creation: Rapid generation of creative designs.
2. Customization: Adapts to specific campaign needs.
   
### Challenges:

1. Prompt Engineering: Addressed with structured templates and few-shot learning.
2. API Integration: Managed rate limits with queuing, caching, and fallback mechanisms.
3. Performance: Optimized algorithms and added client-side caching for smoother editing.
