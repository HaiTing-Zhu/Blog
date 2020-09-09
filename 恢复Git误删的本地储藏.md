## 找回git Pop stash/git Drop stash的本地储藏

工作中git执行Pop stash/Drop stash后，都会删除本次的储藏信息，针对误删git其实也做了恢复的操作(后悔药)。

1 执行

    $ git fsck

输出

    Checking object directories: 100% (256/256), done.
    Checking objects: 100% (107413/107413), done.
    Checking connectivity: 110631, done.
    dangling blob 520938368fff72a29245a6f139b99c0681fbe4c0
    dangling blob 511204d7ec3aadd57727c1960a9a1d6a808dd218
    dangling commit 9b2128cee97ec49b26535453c774e95be7a24729
    dangling blob 13273c0fdf2db50fada5f32324d000389bc6b4e9
    dangling commit 6633b8e87b3a0f100b5d46e453b26393c1e6877e
    dangling blob 2538bc5177aa6e6096dfcbfe799ed892b1ae9e8e
    dangling blob cc4fcc7ce4f1ecf18a764712f1739294df4df912
    dangling blob 6c508c1db2966206200f754560f2b7b561e3bc77
    dangling blob 705a2c258f3d7cee593a7db3d4355f46b85e121f
    ...

dangling commit 项包含我们之前执行Pop stash/Drop stash后删除的commit记录

2 执行

    $ git show <commitHash>

查看commit中的修改，确定是否为需要恢复的commit

3 执行

    $ git stash apply <commitHash>

恢复误删的储藏
