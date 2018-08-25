fire = () =>{
        
        let sql = "UPDATE `security_table` SET `password`= '"+this.state.newPassword+"' WHERE `id` ="+this.state.userid;
        console.log(sql);
        fetch('https://3day.000webhostapp.com/run_query.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: sql,
            }) 
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson[0].password);
                    alert("changed password successfully"); 
                    this.setState({submitButtonDisable:false});

                }).catch((error) => {
                    alert("updated slow network");
                    console.log(error);
                    this.setState({submitButtonDisable:false});

                });
    }