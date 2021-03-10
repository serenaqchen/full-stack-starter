import {useState, useEffect} from "react";
import Api from "../Api";
import {useHistory, useParams} from "react-router-dom"

function SkillsForm(){
    const history = useHistory();
    const [skills, setSkills] = useState({
        name: '',
        slug: '',
        postion: 0
    });

    return (
        <main className="container">
            <h1>Skills Form</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" value={skills.name}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Slug</label>
                    <input className="form-control" type="text" name="slug" value={skills.slug}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Postition</label>
                    <input className="form-control" type="text" name="position" value={skills.position}/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default SkillsForm