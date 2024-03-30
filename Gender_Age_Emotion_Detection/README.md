
# Age Detection using CNN Architecture

This project is a part of a team activity involving four members, aiming to develop a machine learning model for age detection using Convolutional Neural Network (CNN) architecture. The project focuses on accurately predicting the age of individuals based on facial images.

## Team Members

- [Aditi Khyadad]: Responsible for implementing the age detection module using CNN architecture.
- [Shreya P M]
- [Sakshi T]
- [Girish T]

## Project Overview

The goal of this project is to train a CNN model to predict the age of individuals from facial images. The project involves the following key steps:

1. **Data Collection**: Facial image datasets containing labeled age information were collected for training and testing the model.

2. **Data Preprocessing**: The collected data underwent preprocessing steps, including image resizing, normalization, and augmentation to prepare it for training.

3. **Model Training**: A CNN architecture was designed and implemented using TensorFlow/Keras. The model was trained on the preprocessed dataset to learn age patterns from facial features.

4. **Evaluation**: The trained model was evaluated using a separate test dataset to assess its performance in age prediction accuracy.

5. **Visualization**: Confusion matrices and loss/accuracy plots were generated to visualize the model's performance and analyze its behavior.

## Installation and Setup

To reproduce the results of this project, follow these steps:

1. Clone the repository to your local machine.
   ```
   git clone [https://github.com/aditikhyadad/resume/new/main/Gender_Age_Emotion_Detection]
   ```

2. Set up the required environment using Python and TensorFlow/Keras.
   ```
   pip install tensorflow
   ```

3. Download the required dataset or provide the path to the existing dataset in the code.

4. Execute the provided Python script in a suitable environment (e.g., Jupyter Notebook, Google Colab) to train and evaluate the CNN model.


### Key Findings

- **Model Architecture**: The CNN model architecture consists of multiple convolutional and pooling layers followed by fully connected layers, achieving a total of 422,695 trainable parameters.

- **Training Performance**: The model achieved a training loss of 0.499 and training accuracy of 0.736 after training for a certain number of epochs.

- **Evaluation Results**: On the test dataset, the trained model attained a loss of 0.673 and accuracy of 0.736.

- **Confusion Matrix**: The confusion matrix illustrates the distribution of predicted age groups compared to the actual age groups, providing insights into the model's performance across different age categories.

## Future Enhancements

- Implement additional data augmentation techniques to further improve model generalization.
- Experiment with different CNN architectures and hyperparameters to optimize model performance.
- Extend the age detection model to include gender and emotion detection for a more comprehensive analysis of facial attributes.

## Contact Information

For any inquiries or feedback regarding this project, please contact [aditikhyadad@gmail.com].
