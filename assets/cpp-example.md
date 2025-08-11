# C++ Example
```cpp
#include <iostream>
#include <vector>

float average(const std::vector<int>& data) {
    int sum = 0;
    for (int n : data) sum += n;
    return static_cast<float>(sum) / data.size();
}

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::cout << average(data) << std::endl;
    return 0;
}
```
