

export const validate = (validationSchema) => async (req,res,next)=>{
  const parseBody = await validationSchema.parseAsync(req.body)
  req.body= parseBody;
  next();
}