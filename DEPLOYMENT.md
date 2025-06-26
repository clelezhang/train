# Deploying to Render

This project can be deployed to Render as a static site. Here are the steps:

## Option 1: Deploy via Render Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add deployment files"
   git push origin main
   ```

2. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Sign up or log in
   - Click "New +" and select "Static Site"

3. **Connect your repository**
   - Connect your GitHub account
   - Select this repository (`train`)

4. **Configure the deployment**
   - **Name**: `train-bus-window` (or any name you prefer)
   - **Build Command**: `npm install`
   - **Publish Directory**: `.` (root directory)
   - **Environment**: Static Site

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically deploy your site

## Option 2: Deploy via render.yaml (Advanced)

If you prefer using the `render.yaml` file:

1. Push your code to GitHub
2. In Render dashboard, create a new "Blueprint" 
3. Connect your repository
4. Render will automatically detect and use the `render.yaml` configuration

## After Deployment

- Your site will be available at `https://your-app-name.onrender.com`
- Render will automatically redeploy when you push changes to your main branch
- You can set up a custom domain in the Render dashboard if desired

## Local Testing

To test locally before deploying:

```bash
npm install
npm start
```

Then visit `http://localhost:10000` in your browser. 