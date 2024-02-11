

const ImgUpload = async (img_hosting_token:any,formData:any) => {
    
  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${img_hosting_token}`,
    {
      method: "POST",
      //   cache: "no-store",
      body: formData,
    }
  );

  const responseData = await response.json();
  return responseData
};

export default ImgUpload;
