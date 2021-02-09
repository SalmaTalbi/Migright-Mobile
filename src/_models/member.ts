export interface MemberModel {
    _id: String,
    sexe:  String, 
    full_name: String, 
    email: String, 
    username: String, 
    password: String,
    phone: String, 
    avatar:String, 
    CIN: String, 
    NLC : String, 
    jobTitle : String, 
    isAdmin: Boolean,
    status: String, 
    address: {
        street : String, 
        governorate: String, 
        country: String, 
       
    }
}