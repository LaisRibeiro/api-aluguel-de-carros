
interface Course {
    name: string;
    duration: number;
    educator?: string;
}

class CreateCourseService {
    execute( { duration, educator = "Pietro", name }: Course ){
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService()