export default class Daily {
    constructor(
        request
    ){
        if (request){
        this.id = request.id.toString()
        this.icon = request.icon
        this.name = request.name
        this.description = request.description
        this.requirement = request.requirement
        try{
            this.access = request.required_access
        } catch {
            this.access = []
        }
        
        this.type = request.type
    } else {
        this.id = null
        this.icon = null
        this.name = null
        this.description = null 
        this.requirement = null
        this.type = null
        this.access = null
    }
    }
}