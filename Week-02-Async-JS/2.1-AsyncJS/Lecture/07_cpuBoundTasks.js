// CPU-bound tasks are those where the execution time is primarily determined by the speed of the CPU, meaning the processor is the bottleneck in the operation. These tasks involve extensive computations, complex calculations, or processing large datasets, and often involve minimal interaction with other system resources like memory or I/O devices. 
// Key Characteristics of CPU-bound Tasks: 

    //  Heavy reliance on the CPU:
        // The core of the task involves performing a lot of calculations or processing data within the CPU. 

    // Limited by CPU speed:
        // The overall speed of the task is constrained by how quickly the CPU can perform these calculations. 

    // Examples:
        // Image/video processing: Tasks like resizing, encoding, or applying filters involve numerous calculations per pixel. 
        
        // Scientific simulations: These often require complex mathematical models and simulations. 
        
        // Cryptographic operations: Encryption and decryption algorithms can be computationally intensive. 
        
        // Data analysis and machine learning: Algorithms like sorting, searching, and complex statistical computations can be CPU-bound. 
        
        // Game rendering: While some aspects can be GPU-bound, the core game logic and physics calculations are often CPU-bound. 

// Optimizing CPU-bound Tasks:

    // Parallel processing: Utilizing multiple CPU cores can significantly reduce execution time. 

    // Efficient algorithms and data structures: Choosing the right algorithms and data structures can reduce the number of computations needed. 

    // Offloading to specialized hardware: If possible, tasks can be moved to GPUs or other specialized hardware that can handle parallel processing more efficiently. 

    // Caching frequently used data: Reducing the need to recompute data can improve performance. 

    // Optimizing loops and repetitive tasks: Reducing redundant calculations within loops can have a noticeable impact

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	

// this is the CPU bound task as it totally depend on the power of CPU that how fast it executes