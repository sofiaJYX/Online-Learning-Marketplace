# Online Learning Marketplace

An eLearning platform that connects teachers and students for seamless course management and learning experiences. It allows teachers to add and edit courses, and students to register, purchase courses, and access their content.

**Deployed Demo:** [Online Learning Marketplace](https://online-learning-marketplace.vercel.app/)

<img width="908" alt="Screenshot 2025-01-08 at 2 16 20 PM" src="https://github.com/user-attachments/assets/209088c5-3a02-4121-8243-bf7dcb8fbd5e" />


## Features
- **Two types of users**: Teachers and Students.
- **User registration & sign-in**: Users can create an account and log in securely.
- **Course purchase**: Students can browse, purchase, and pay for courses via Stripe.
- **Course viewing**: Students can access and view their purchased courses.
- **Teacher course management**: Teachers can add new courses and edit existing ones.

<img width="904" alt="Screenshot 2025-01-08 at 2 16 56 PM" src="https://github.com/user-attachments/assets/bcf1f13a-b16f-476b-9a69-ec0c5c3ec938" />


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
