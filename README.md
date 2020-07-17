# desserts-backend

Cupcakes

base_url: https://desserts-backend.herokuapp.com/

GET base_url/cupcake

```javascript
{
    "ok": true,
    "cupcakes": [
        {
            "img": [],
            "price": 0,
            "stock": 0,
            "status": true,
            "_id": "5f10f251bdfc087abb8550c7",
            "name": "c00"
        },
        {
            "img": [],
            "price": 0,
            "stock": 0,
            "status": true,
            "_id": "5f10f2b5bdfc087abb8550c8",
            "name": "c01"
        }
    ],
    "count": 2
}
```
cupcakes

|Name   |Description    |Type           |
|-------|---------------|---------------|
|id     |               |string         |        
|name   |               |string         |
|img    |               |Array[string]  |
|price  |               |number         |
|stock  |available items|number         |
|status |item db status |boolean        |


POST base_url/cupcake

|Name   |Description    |Type           |Required   |Default    |
|-------|:-------------:|---------------|:---------:|:---------:|
|name   |               |string         |x          |           |
|img    |               |Array[string]  |           |[]         |
|price  |               |number         |           |0          |
|stock  |available items|number         |           |0          |
|status |item db status |boolean        |           |true       |