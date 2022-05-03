$(document).ready(function()
{
    $.ajax({
        type:'get',
        url: 'https://www.universal-tutorial.com/api/getaccesstoken',
        success:
            function(data)
            {
                // console.log(data)
                GetCountry(data.auth_token) 
            }
        ,
        error:{},
        headers : {
            "Accept": "application/json",
            "api-token": "uKCR_6Cyyc56FE3O5SrOEVCas7RqmYiW8_-anYG6ybSuBMJnHKrgyBiVX0nKQ4lsE20",
            "user-email": "arnabchtterjee912@gmail.com"
          }
    });


});

function GetCountry(auth_token)
{
    $.ajax({
        type:'get',
        url: 'https://www.universal-tutorial.com/api/countries/',
        success:function(data)
            {
                $(data).each(function(a,b)
                {
                    $('#country-list').append(`<option value = "${b.country_name}"> ${b.country_name} </option>`);
                });
                $('#country-list').change(function()
                    {
                        country = $(this).val();
                        console.log(country)
                        $('#state-list').prop('disabled',false)
                        $.ajax({

                            type:'get',
                            url: 'https://www.universal-tutorial.com/api/states/' + country,
                            
                            success:function(data)
                                {
                                    
                                    $('#state-list').empty();
                                    $(data).each(function(a,b)
                                    {
                                        $('#state-list').append(`<option value = "${b.state_name}" > ${b.state_name} </option>`);
                                        
                                    });
                    
                                    $('#state-list').change(function()
                                        {
                                            state = $(this).val();
                                            console.log(state)
                                            $('#district-list').prop('disabled',false)

                                            $.ajax({

                                                type:'get',
                                                url: 'https://www.universal-tutorial.com/api/cities/' + state,
                                                
                                                success:function(data)
                                                    {
                                                        $('#district-list').empty();
                                                        $(data).each(function(a,b)
                                                        {
                                                            $('#district-list').append(`<option value = "${b.city_name}"> ${b.city_name} </option>`);
                                                            
                                                        });
                                                    },
                                                error:{
                                                },
                                                headers : {
                                                    "Authorization": "Bearer " + auth_token,
                                                    "Accept": "application/json"
                                                  }
                                            });
                                        });     
                                    },
                            error:{},
                            headers : {
                                "Authorization": "Bearer " + auth_token,
                                "Accept": "application/json"
                              }
                        });
                    });
            },
        error:{},
        headers : {
            "Authorization": "Bearer " + auth_token,
            "Accept": "application/json"
          }
    });
}