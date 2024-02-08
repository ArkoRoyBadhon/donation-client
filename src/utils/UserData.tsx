// utils/user.ts

interface UserData {
    email: string;
    name: string;
  }
  
  export const saveUserData = async (userData: UserData): Promise<void> => {
    try {
      const response = await fetch('/api/save-user-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log('User data saved successfully!');
      } else {
        console.error('Failed to save user data');
      }
    } catch (error: any) {
      console.error('An error occurred while saving user data:', error);
    }
  };
  