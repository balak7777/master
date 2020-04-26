import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setpost] = useState([])
    const [id, setid] = useState(1)
    const [idfrombuttonclick, setidfrombuttonclick] = useState(1)

    const clickHandler = () => {
        setidfrombuttonclick(id)
    }
    useEffect(() => {
        /*axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res => {
            console.log(res)
            setpost(
                res.data
            )
        })
        .catch(err =>{
            console.log(err)
        })*/

        sessionStorage.setItem('MyUniqueUserToken',
                JSON.stringify(
                    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhenhYOVlMYzQ1LThIOThBQXJhanZmeldhLWIycFEtcnI2c0w2dFlZZHpNIn0.eyJqdGkiOiJmMzc3YjYyMC1hMDgyLTQwNzYtOWUxNS0zNjYyNjhkNjZmZmIiLCJleHAiOjE1ODc2Mzg0NjUsIm5iZiI6MCwiaWF0IjoxNTg3NjM0ODY1LCJpc3MiOiJodHRwczovL2FwaS5mdXNpb25mYWJyaWMuY2xvdWQvbG9naW4vdjEiLCJhdWQiOlsicGF5bWVudGlucXVpcnktdjEtNDM4YWY5ZWEtOTBkOC00NzJhLTg3YzUtMWMzYjFlN2U3ODQ3IiwiYmFsYW5jZWluZm8tYmFsYW5jZWlucXVpcnktdjEtNGU4YWIyNmUtZTQwNC0xMWU5LTgxYjQtMmEyYWUyZGJjY2U0IiwicGF5bWVudC1wYXltZW50LXJlcXVlc3QtdjEtNTNmMjY3ZTYtYzdiZS0xMWU4LWE4ZDUtZjI4MDFmMWI5ZmQxIl0sInN1YiI6Ijk5ZTk4Nzg2LTY1ODAtNDNhNi04NzRkLWEzYmJmOTc5NjBlZiIsInR5cCI6IkJlYXJlciIsImF6cCI6Ijk5ZTk4Nzg2LTY1ODAtNDNhNi04NzRkLWEzYmJmOTc5NjBlZiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjAwNjQ1OGUxLTEyNTUtNDk3Zi04ZWEyLTUzNDFjZTBiZWM0OCIsImFjciI6IjEiLCJzY29wZSI6Im9wZW5pZCBwYXltZW50aW5xdWlyeS12MS00MzhhZjllYS05MGQ4LTQ3MmEtODdjNS0xYzNiMWU3ZTc4NDcgYmFsYW5jZWluZm8tYmFsYW5jZWlucXVpcnktdjEtNGU4YWIyNmUtZTQwNC0xMWU5LTgxYjQtMmEyYWUyZGJjY2U0IHBheW1lbnQtcGF5bWVudC1yZXF1ZXN0LXYxLTUzZjI2N2U2LWM3YmUtMTFlOC1hOGQ1LWYyODAxZjFiOWZkMSIsImFwcCI6Ijk5ZTk4Nzg2LTY1ODAtNDNhNi04NzRkLWEzYmJmOTc5NjBlZiIsImlwd2hpdGVsaXN0IjoiIiwiaW50SXBXaGl0ZWxpc3QiOiIiLCJ0ZW5hbnQiOiJzYW5kYm94IiwidXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtOTllOTg3ODYtNjU4MC00M2E2LTg3NGQtYTNiYmY5Nzk2MGVmIn0.SHpax2wPoUxlSup16pe4mBgQfVzz8C2U849JjrlU6j_KXOfuEaQFJhtB81VIf4Lpusj1jKSPdUnpeuvatVBmKiNTUv3bcNavsFoY04zz3p5MBIP9CE3pruH6ZJaHFmYnK-cir2O-r3Wmbil2TssqD3v8eZB5y-X4GTijy3xqRfDSz7stx643c_7E8e9oT14SDabmiPSw0jbE7TMSC_eELbQC4ROVMTg8emKkG_XsR-jf5zLTSejy8J_M2vMRlCKuFoI2pdOQgFtugHY_tvDsb3YIndTUDZH-ejotu3KfDZOvgGUiPhVIKVAHJi6Sa0DVInYu5xBcoZhBkawhy6IX5A'
                    )
            );

        let token = JSON.parse(sessionStorage.getItem('MyUniqueUserToken'));
        const options = {
            method:'GET',
            mode: 'cors',
            headers: {'Authentication': `Bearer ${token}`}
          };
          console.log(options)
          axios.get('https://api.fusionfabric.cloud/referential/v1/countries', {}, options).then(response => {
            console.log(response);
          });
        return () => {
            
        };
    }, [idfrombuttonclick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setid(e.target.value)}></input>
            <button onClick={clickHandler}>Get</button>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <div>
                {post.title}
            </div>
        </div>
    )
}

function setidfrombuttonclick(id){
    debugger;
    
    }
    
export default DataFetching
