import CorporateModel from "../models/corporateModel.js";
import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'

const login= async(req,res)=>{
    try {
        const { email, password } = req.body;
        
        const user= await UserModel.findOne({email:email});

        if(!user){
            return res.status(404).json({ message: 'E-mail or password is incorrect' });   
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        
        if (!passwordMatch) {
            return res.status(402).json({ message: 'E-mail or password is incorrect' });
        }else{
            const token = jwt.sign({userId:user._id,name:user.name,surName:user.surName},process.env.SECRET_KEY,{expiresIn:'1h'})
        }

        res.status(200).json({success:true,token:token})

    } catch (error) {
        console.log("Error:",error)
    }
}

const individualRegister = async(req,res)=>{
   const {name,surName,email,phone,password,passwordConfirmation} = req.body;

    try {
        if(!name||!surName||!email||!phone||!password||!passwordConfirmation){
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const isEmailValid = validateEmail(email);
        if (!isEmailValid) {
        return res.status(400).json({ success: false, message: 'This email is incorrect' });
        }


        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(409).json({ success: false, message: 'This email is already belong to another user' });
        }


        // if (!validatePhone(phone)) {
        //     return res.status(400).json({ success: false, message: 'Telefon numarası sadece sayı içermelidir ve 10 haneli olmalıdır.' });
        //   }

          
        const existingNumber = await UserModel.findOne({ phone });
        if (existingNumber) {
        return res.status(400).json({ success: false, message: 'This phone number is already using by another user' });
        }
        if (password !==passwordConfirmation) {
            return res.status(400).json({
              success: false,
              message: 'Passwords are not matched',
            });
          }

    
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new UserModel({ name,surName, email,phone, password: hashedPassword });
          await user.save();
          res.status(200).json({success:true, message: 'Registration successful' });

    }
    catch (error) {
        res.status(500).json({success:false,message:"server error"})
    
    }
}



const corporateRegister = async(req,res)=>{


    const {name,surName,email,phone,companyName,password,passwordConfirmation} = req.body;
    if(!name||!surName||!email||!phone||!companyName||!password||!passwordConfirmation){
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
    return res.status(400).json({ success: false, message: 'This email is incorrect' });
    }

    const existingUser = await CorporateModel.findOne({email});
    if(existingUser){
        return res.status(409).json({ success: false, message: 'This email is already belong to another user' });
    }

    // if (!validatePhone(phone)) {
    //     return res.status(400).json({ success: false, message: 'Telefon numarası sadece sayı içermelidir ve 10 haneli olmalıdır.' });
    //   }
      
    const existingNumber = await CorporateModel.findOne({ phone });
    if (existingNumber) {
    return res.status(400).json({ success: false, message: 'This phone number is already using by another user' });
    }
    if (password !==passwordConfirmation) {
        return res.status(400).json({
          success: false,
          message: 'Passwords are not matched',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const company = new CorporateModel({ name,surName, email,companyName,phone, password: hashedPassword });
      await company.save();
      res.status(200).json({success:true, message: 'Registration successful' });

}


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
// const validatePhone = (phone) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
//   }; 

export{login,individualRegister,corporateRegister};