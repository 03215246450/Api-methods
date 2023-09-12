import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


export default function Projects() {
  const [listData, setListData] = useState<any>([]);

  const navigate = useNavigate();

  const deletePost = (id: any) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(() => {
        console.log("Your comment has been deleted" );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setListData([...res.data]);
        console.log([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h3 className="text-center py-5 ">
          (Get , Post , Put , Delete) using Api{" "}
        </h3>
        <div className="container p-2">
          <Button
            onClick={() => {
              navigate("add/");
            }}
            variant="contained"
            color="primary"
          >
            Add data here
          </Button>
        </div>
        {listData &&
          Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((x: any, i: any) => (
            <div
              className="container p-2 mb-3 border border-dark rounded"
              key={i}
            >
              <h4>
                <b className="text-black-75">Name :</b> {x.name}
              </h4>
              <p>
                <b className="text-black-75">Comment :</b>
                {x.body}
              </p>
              <p>
                <b className="text-black-75">Email :</b>
                {x.email}
              </p>
              <p>
                <b className="text-black-75">Id :</b>
                {x.id}
              </p>
              <p>
                <b className="text-black-75">PostId :</b>
                {x.postId}
              </p>

              {/* delete button  */}

              <Button
                onClick={() => deletePost(x.id)}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>

              {/* delete button  */}

              {/* Edit button  */}
              <Button
                onClick={() => {
                  navigate(`/add/${x.id}`);
                }}
                className="m-2"
                variant="outlined"
                endIcon={<EditIcon />}
              >
                Eidt/Put
              </Button>

              {/* Edit button  */}
            </div>
          ))}
      </div>
    </>
  );
}

{
  /* <div className="container my-5">
<div className="row">
    <div className="col-md-12 border shadow">
        <h3 className='text-center my-5'>Update card</h3>
    <Box className='text-center my-4'
component="form"
sx={{
'& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<TextField
label="Name"
value={name}
onChange={(e) => setName(e.target.value)} 
className='w-50' id="standard-basic" variant="standard" />

<TextField   
value={body}
onChange={(e) => setBody(e.target.value)} 
className='w-50' id="standard-basic" label="Body" variant="standard" /><br />

<TextField 
value={email}
onChange={(e) => setEmail(e.target.value)} className='w-25' id="standard-basic" label="Email" variant="standard" />

<TextField
value={postId}
onChange={(e) => setPostId(e.target.value)} className='w-25' id="standard-basic" label="Post ID" variant="standard" /><br />

<Button
className="m-2"
variant="contained"
startIcon={<UpgradeIcon />}
onClick={handleUpdateClick} // Call the function on button click
>
Update
</Button>
</Box>
    </div>
</div>
</div> */
}
