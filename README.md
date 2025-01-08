# Online Learning Marketplace

An eLearning platform that connects teachers and students for seamless course management and learning experiences. It allows teachers to add and edit courses, and students to register, purchase courses, and access their content.

**Deployed Demo:** [Online Learning Marketplace](https://online-learning-marketplace.vercel.app/)

## Features
- **Two types of users**: Teachers and Students.
- **User registration & sign-in**: Users can create an account and log in securely.
- **Course purchase**: Students can browse, purchase, and pay for courses via Stripe.
- **Course viewing**: Students can access and view their purchased courses.
- **Teacher course management**: Teachers can add new courses and edit existing ones.

## Technologies
- **Frontend**: Next.js, TypeScript
- **Backend**: Node.js, Express.js, AWS Lambda, API Gateway
- **Authentication**: Clerk
- **Payment Integration**: Stripe
- **Hosting & Storage**: Vercel, AWS S3, CloudFront

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/sofiaJYX/Online-Learning-Marketplace.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables for AWS and Stripe.
4. Start the development server:
    ```bash
    npm run dev
    ```

## Deployment
Deployed on **Vercel** for frontend hosting and **AWS** for backend services. Payment transactions are securely processed using **Stripe**.

## Contributing
Feel free to fork the repository and submit pull requests. Ensure code follows best practices for scalability and security.

## License
MIT License.
