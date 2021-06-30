---
title: Testing Times and Dates in Rails
date: "2021-07-01"
tags: ["rails"]
published: true
description: ""
---

### Testing time

- Exemplo de código para comparar Time:
```
    test "created timestamp should be set the current time" do
        freeze_time
        assert_equal Time.current, Model.create.created_at
    end
```

- A chamada do ```freeze_time``` se faz necessária para que a comparação seja totalmente precisa, sem qualquer diferença entre segundos e etc.


### Testing date

- Exemplo de código para comparar date:
```
    test "has 7 day free trial" do
        travel 1.day
        assert_equal 7.days.from_now, Model.create.trial_ends_at
    end
```

- A chamada do ```travel``` se faz necessária para que a comparação ..

```
    test "on trial" do
       model = Model.create
       assert model.on_trial?
    end
```

```
    test "off trial after trial period" do
       model = Model.create
       travel_to 14.days.from_now
       assert model.on_trial?
    end
```